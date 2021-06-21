import React from 'react'
import { useSelector } from 'react-redux'
import ReleaseDate from './ReleaseDate'
import EpisodeDuration from './EpisodeDuration'
import EpisodeDescription from './EpisodeDescription'

import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

const PodcastDetailsEpisodes = ({ episodes, handlePause, handlePlay }) => {
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying, episode: { episodeUrl } } = currentTrack

  return (
    <>
      {
        episodes &&
        <>
          {episodes.map(episode => (
            <div
              key={episode.releaseDate}
              className="my-3"
            >
              <div
                className="flex w-full max-w-full mx-auto overflow-hidden 
                            hover:bg-gray-900 border-b border-gray-800
                             shadow-md px-4  py-6">
                <img
                  className="object-cover w-32 h-32 rounded pt-5 md:pt-1"
                  alt="User avatar"
                  src={episode.artworkUrl160} />

                <div className="flex items-center">
                  <div className="pl-3">
                    <div className=" dark:text-gray-200">
                      <h3 className="font-medium pb-2 text-white">{episode.trackName}</h3>
                      <EpisodeDescription description={episode.description} characterCount={150} readMore={true} />
                      <div className="pt-3 flex ">
                        {
                          isPlaying === true && episodeUrl === episode.episodeUrl ?
                            <img
                              src={pause_button}
                              alt="button"
                              onClick={handlePause}
                            />
                            :
                            <img
                              src={play_button}
                              alt="button"
                              onClick={(e) => handlePlay(episode)(e)}
                            />
                        }
                        <ReleaseDate date={episode.releaseDate} />
                        <EpisodeDuration duration={episode.trackTimeMillis} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))

          }
        </>
      }
    </>
  )
}

export default PodcastDetailsEpisodes