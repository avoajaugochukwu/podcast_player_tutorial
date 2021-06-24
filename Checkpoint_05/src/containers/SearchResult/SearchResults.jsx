import React from 'react'
import { getGenreColor, getGenreGradientColor } from '../../utils/genreColor'
import EpisodeDescription from '../../components/EpisodeDescription'


const SearchResults = ({ podcastResults, episodeResults, activeSearchText, handleClick }) => {
  
  const topResult = podcastResults[0]
  const episodes = episodeResults
  const otherPodcasts = podcastResults.slice(1, topResult.length)

  return (
    <>
      <div className="flex md:flex-row flex-col md:space-x-4">
        <div className="md:w-2/5 w-full p-4">
          <h1 className="text-left text-gray-100 text-2xl font-bold pb-2">Top result</h1>
          <div className={` bg-gradient-to-b ${getGenreGradientColor(topResult.genres[0])} bg-gray-900 p-5 rounded-lg hover:bg-gray-800 cursor-pointer`} onClick={() => handleClick(topResult.collectionId)}>

            <img
              className="object-cover w-32 h-32 rounded-lg"
              alt="User avatar"
              src={topResult.artworkUrl600} />

            <div className="pt-5 text-gray-300 text-left">
              <h3 className="text-xl text-gray-200">{topResult.trackName}</h3>
              <p>{topResult.artistName}</p>
              <div className="text-left pt-4">
                {topResult.genres.map(genre => (
                  <span
                    className={`text-xs text-white p-0.5 mr-1 rounded ${getGenreColor(genre)}`} key={genre}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
        {/*  */}
        <div className="md:w-3/5 w-full p-4">
          <h1 className="text-left text-gray-100 text-2xl font-bold pb-2">Episodes</h1>
          {
            episodes &&
            episodes.map(item => (
              <div key={item.trackId} className="flex flex-row bg-gray-900 mb-2 hover:bg-gray-800">
                <img
                  className="object-cover rounded"
                  alt="User avatar"
                  src={item.artworkUrl60} />
                <div className="text-gray-100 p-2 px-4 text-left">
                  <p className="">{item.trackName}</p>
                  <EpisodeDescription description={item.shortDescription} characterCount={150} readMore={true} />
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Podcast that match '{activeSearchText}'</h1>
      <div className="flex flex-wrap flex-row">
        {otherPodcasts.map(podcast => (

          <div className="xl:w-1/5 md:w-1/3 sm:w-1/3 w-1/3 p-1" key={podcast.collectionId} >
            <div onClick={() => handleClick(podcast.collectionId)}>
              <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">

                <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />
                
                <div className="min-h-full h-14">

                  <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                    {podcast.collectionName}
                  </h2>
                  <p className="text-left pt-1 text-gray-400 text-xs">
                    {podcast.artistName}
                  </p>

                </div>
              </div>
            </div>

          </div>

        ))}
      </div>
    </>
  )
}

export default SearchResults