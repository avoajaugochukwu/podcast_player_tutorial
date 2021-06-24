import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { BASE_URL } from '../utils/consts'
import Loading from '../containers/Spinner/Loading'

const GenreListScreen = (props) => {
  const { match: { params: { genreId } } } = props

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

  const history = useHistory()
  const handleClick = (collectionId) => {
    history.push(`../podcast/${collectionId}`)
  }


  return (
    <>
      {
        results ?
        <>
          <section className="container px-5 mx-auto">
            <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold pb-5 ">{results[0].genres[0]}</h1>
            
              <div className="flex flex-wrap">
                {
                  results.map(podcast => (
                    <div
                      className="xl:w-1/5 md:w-1/2"
                      key={podcast.collectionName}

                    >
                      <div className="p-1">
                        <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg" onClick={() => handleClick(podcast.collectionId)}>
                          <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />

                          <div className="min-h-full h-14">
                            <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                              {podcast.collectionName}
                            </h2>
                            <p className="text-left text-gray-400 text-xs">
                              {podcast.artistName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            
          </section>
        </>
        :
        <Loading />
      }

    </>
  )
}

export default GenreListScreen

const getPodcasts = async (genreId) => {
  const response = await axios.get(`${BASE_URL}search?term=podcast&genreId=${genreId}&limit=200`)
  return response.data
}