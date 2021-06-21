import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PodcastDetailsBody from '../components/PodcastDetailsBody'
import PodcastDetailsHeader from '../components/PodcastDetailsHeader'

import Loading from '../containers/Spinner/Loading'

import { BASE_URL } from '../utils/consts'

function PodcastDetailsScreen({ match: { params: { collectionId } }, handlePause, handlePlay }) {
  const [podcast, setPodcast] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcast(collectionId)
        .then(data => {
          setPodcast(data)
        })
        .catch(err => console.log(err))
    };
    fetchAPI();
  }, [collectionId]);

  const { results } = podcast

  let podcastList, podcastDetails

  if (results) {
    podcastDetails = results[0]
    podcastList = results.slice(1, results.length)
  }

  return (
    <section>
      {
        results ?
          <>
            <PodcastDetailsHeader podcastDetails={podcastDetails} />
            <PodcastDetailsBody episodes={podcastList} handlePause={handlePause} handlePlay={handlePlay} />
          </>
          :
          <>
            <Loading />
          </>
      }
    </section>
  )
}

const getPodcast = async (collectionId) => {
  const response = await axios.get(`${BASE_URL}lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=400`)
  return response.data
}

export default PodcastDetailsScreen