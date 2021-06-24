import React from 'react'

const SearchResultSkeleton = () => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="w-2/5 p-4">
        <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Top result</h1>
        <div className="bg-gray-900 p-5">
          <div className="h-32 w-32 rounded-full bg-gray-800"></div>
          <div className="pt-5">
            <div className="h-7 pb-3 w-2/3 bg-gray-800"></div>
            <div className="h-2"></div>
            <div className="h-5 w-2/5 bg-gray-800"></div>
          </div>
        </div>

      </div>
      <div className="w-3/5 p-4">
        <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Podcast</h1>
        <div className="h-10 w-full bg-gray-800"></div>
        <div className="h-3"></div>
        <div className="h-10 w-full bg-gray-800"></div>
        <div className="h-3"></div>
        <div className="h-10 w-full bg-gray-800"></div>
        <div className="h-3"></div>
        <div className="h-10 w-full bg-gray-800"></div>
      </div>
    </div>
  )
}

export default SearchResultSkeleton