import React, { useState, useEffect } from 'react'
import { useDebounce } from "use-debounce";
import axios from 'axios';

import SearchResultContainer from '../containers/SearchResult/SearchResultContainer'
import SearchTopGenres from '../containers/SearchTopGenres/SearchTopGenres'

import right_chevron_circle from '../img/chevron_circle_right_icon.svg'
import left_chevron_circle from '../img/chevron_circle_left_icon.svg'
import search_icon_black from '../img/search_icon_black.svg'
import cancel_close_delete_icon from '../img/cancel_close_delete_icon.svg'


import { BASE_URL } from '../utils/consts'

const initalText = " ";

function SearchScreen(props) {
  const [searchText, setSearchText] = useState(initalText)
  const [searchPodcastResults, setSearchPodcastResults] = useState({})
  const [searchEpisodeResults, setSearchEpisodeResults] = useState({})
  const [debouncedText] = useDebounce(searchText, 500)
  const [activeSearchText, setActiveSearchText] = useState('')

  useEffect(() => {
    const source = axios.CancelToken.source()

    if (debouncedText) {
      getPodcasts(debouncedText)
        .then(data => {
          setSearchPodcastResults(data)
        })
        .catch(err => console.log(err))

      getEpisodes(debouncedText)
        .then(data => {
          setSearchEpisodeResults(data)
        })
        .catch(err => console.log(err))
    }
    else {
      setSearchPodcastResults({})
      setSearchEpisodeResults({})
    }

    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      )
    }
  }, [debouncedText, searchText])

  const { history } = props
  const handleClick = (collectionId) => {
    history.push(`podcast/${collectionId}`)
  }

  const handleBack = () => {
    history.goBack()
  }

  const handleSearchCancel = (e) => {
    setActiveSearchText('')
    setSearchText('')
    e.target.value = ''
  }

  const { resultCount: podcastResultCount, results: podcastResults } = searchPodcastResults
  const { results: episodeResults } = searchEpisodeResults


  return (
    <section>
      <div className="container px-5 mx-auto">
        <div className="flex flex-row space-x-5 pt-3 ">

          <img
            src={left_chevron_circle}
            className="w-8 my-3 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer"
            alt="left_chevron"
            onClick={() => handleBack()} />

          <img
            src={right_chevron_circle}
            className="w-8 my-3 rounded-full bg-gray-400 cursor-not-allowed hover:bg-gray-600 cursor-pointer"
            alt="right_chevron" />

          <div className="relative w-full md:w-4/12">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={search_icon_black} alt="search_icon_black" />
            </span>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-full"
              placeholder="Podcast"
              aria-label="Podcast"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
                setActiveSearchText(e.target.value)
              }} />
            {
              activeSearchText && 
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                <img 
                  src={cancel_close_delete_icon} 
                  alt="cancel_close_delete_icon"
                  onClick={(e) => handleSearchCancel(e)} />
              </span>
            }
          </div>
        </div>

        {
          activeSearchText !== ''
            ?
            <SearchResultContainer
              podcastResultCount={podcastResultCount}
              podcastResults={podcastResults}

              episodeResults={episodeResults}
              activeSearchText={activeSearchText}
              handleClick={handleClick} />
            :
            <SearchTopGenres />
        }
      </div>

    </section>
  )
}


const getPodcasts = async (text) => {
  const response = await axios.get(`${BASE_URL}search?term=${text}&entity=podcast`)
  return response.data
}

const getEpisodes = async (text) => {
  const response = await axios.get(`${BASE_URL}search?term=${text}&entity=podcastEpisode&limit=4`)
  return response.data
}

export default SearchScreen