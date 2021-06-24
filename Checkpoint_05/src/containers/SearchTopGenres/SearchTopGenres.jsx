import React from 'react'

import TopPodcastBox from './TopPodcastBox'

const SearchTopGenres = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold px-5">
        Top genres
      </h1>
      <div className="container px-5 py-5 mx-auto">

        <div className="flex flex-wrap -m-4">
          <TopPodcastBox genreId="1402" /> {/* Design */}
          <TopPodcastBox genreId="1488" genre="Crime" /> {/* Crime */}
          <TopPodcastBox genreId="1303" /> {/* Comedy */}
          <TopPodcastBox genreId="1321" /> {/* Business */}
          <TopPodcastBox genreId="1314" /> {/* Religion */}
          <TopPodcastBox genreId="1304" /> {/* Self-Improvement */}
          <TopPodcastBox genreId="1527" /> {/* Politics */}
          <TopPodcastBox genreId="1324" genre="Society & Culture" /> {/* Society */}
          <TopPodcastBox genreId="1533" genre="Science" /> {/* Science */}
          <TopPodcastBox genreId="1487" /> {/* History */}
        </div>
      </div>
    </section>
  )

}

export default SearchTopGenres