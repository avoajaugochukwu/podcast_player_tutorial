import React from 'react'
import { getGenreColor, getGenreGradientColor } from '../utils/genreColor'

const PodcastDetailsHeader = ({ podcastDetails }) => {
  return (
    <div className={` bg-gradient-to-b ${getGenreGradientColor(podcastDetails.genres[0])}`}>

      <div className="md:px-8 md:pt-28 md:py-6 p-3 pb-6 flex flex-row flex-grow">

        <div className="md:w-1/5 w-2/6">
          <img src={podcastDetails.artworkUrl600} className="rounded-lg" alt={podcastDetails.artworkUrl600} />
        </div>

        <div className="text-left md:pl-4 pl-2 shadow font-semibold hover:shadow-md">
          <h1 className="text-left text-gray-100 text-3xl md:text-5xl md:pt-5 font-black ">
            {podcastDetails.collectionName}
          </h1>
          <p className="text-left text-gray-100 py-1 pb-1 text-sm font-thin">
            {podcastDetails.artistName}
          </p>
          <div className="text-left p-1">

            {podcastDetails.genres.map(genre => (
              <span
                className={`text-xs text-white p-0.5 mr-1 rounded font-thin ${getGenreColor(genre)}`} 
                key={genre}
              >
                {genre}
              </span>
            ))}

          </div>

          <p className="text-left text-xs text-gray-300 py-1">{podcastDetails.trackCount} Episodes</p>
          
        </div>

      </div>
      <div className="px-8 flex flex-row">
              {/* <ListenButton /> the non functional red button */}
      </div>
    </div>
  )
}

export default PodcastDetailsHeader