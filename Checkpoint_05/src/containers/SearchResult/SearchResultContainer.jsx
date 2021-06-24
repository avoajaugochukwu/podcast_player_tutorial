import React from 'react'

import SearchResults from './SearchResults'
import SearchResultSkeleton from './SearchResultSkeleton'

const SearchResultContainer = ({ podcastResultCount, podcastResults, episodeResults, activeSearchText, handleClick }) => {
  return (
    <div className="min-h-screen w-full">
      {
        podcastResultCount > 0 ?
        <SearchResults podcastResults={podcastResults} episodeResults={episodeResults} activeSearchText={activeSearchText} handleClick={handleClick} />
        :
        <SearchResultSkeleton />
      }
    </div>
  )
}

export default SearchResultContainer