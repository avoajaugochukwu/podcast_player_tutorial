import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { HOMESCREEN_API_URL } from '../utils/consts'

import HomePodcastSection from '../components/HomePodcastSection'
import Loading from '../containers/Spinner/Loading'

function HomeScreen(props) {

  const [podcasts, setPodcasts] = useState()

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcasts()
        .then(data => {
          setPodcasts(data)
        })
        .catch(err => console.log(err))
    };
    fetchAPI();
  }, []);

  let popularPodcasts, crimePodcasts, comedyPodcasts, politicsPodcasts

  if (podcasts) {
    popularPodcasts = podcasts.slice(0, 5)
    crimePodcasts = podcasts.slice(5, 10)
    comedyPodcasts = podcasts.slice(10, 15)
    politicsPodcasts = podcasts.slice(15, 20)
  }


  const { history } = props

  return (
    <>
      {
        podcasts ?
          <>
            <section className="container px-5 mx-auto">
              <HomePodcastSection header={'Popular podcasts'} podcasts={popularPodcasts} history={history} />
              <HomePodcastSection header={'Top crime podcasts'} podcasts={crimePodcasts} history={history} />
              <HomePodcastSection header={'Top comedy podcasts'} podcasts={comedyPodcasts} history={history} />
              <HomePodcastSection header={'Top politics podcasts'} podcasts={politicsPodcasts} history={history} />
            </section>
          </>
          :
          <>
            <Loading />
          </>
      }
    </>
  )
}

export default HomeScreen

const getPodcasts = async () => {
  const response = await axios.get(HOMESCREEN_API_URL)
  return response.data.results
}