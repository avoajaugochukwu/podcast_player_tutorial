import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../utils/consts'

const TopPodcastBox = (props) => {

  const history = useHistory()

  const { genreId, genre } = props

  const [podcasts, setPodcasts] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcasts(genreId)
        .then(data => {
          setPodcasts(data)
        })
        .catch(err => console.log(err))
    };
    fetchAPI();
  }, [genreId]);

  const { results } = podcasts

  const handleClick = (genreId) => {
    history.push(`/genre/${genreId}`)
  }

  return (
    <>
      {
        results &&
        <>
          <div className="xl:w-1/4 md:w-1/2">
            <div className="m-4 cursor-pointer" onClick={() => handleClick(genreId)}>
              <div className="bg-gray-900 hover:bg-gray-800 pl-1 pt-2 pr-1 rounded-lg">
                <div className="flex flex-wrap">
                  {results.map(podcast => (

                    <div className="w-1/2" key={podcast.collectionId} >
                      <img src={podcast.artworkUrl600} alt="pod_art" className="w-full" />
                    </div>
                  ))}
                </div>

                <h3 className="text-gray-300 font-bold py-2">
                  {
                    genre ?
                      genre
                      :
                      results[0].genres[0] //get the genre of the first item in result
                  }
                </h3>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default TopPodcastBox

const getPodcasts = async (genreId = 1533) => {
  const response = await axios.get(`${BASE_URL}search?term=podcast&genreId=${genreId}&limit=4`)
  return response.data
}