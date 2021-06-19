import React from 'react'

const HomePodcastSection = (props) => {

    const { header, podcasts, history } = props
    
    const handleClick = (collectionId) => {
        history.push(`podcast/${collectionId}`)
    }

    return (
        <>
            <div>
                <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold ">
                    {header}
                </h1>
            </div>
            <div className="flex flex-wrap flex-row">
                {
                    podcasts.map(podcast => (
                        <div
                            className="xl:w-1/5 md:w-1/3 sm:w-1/3 w-1/3 px-1 py-2"
                            key={podcast.collectionName}
                        >
                            <div onClick={() => handleClick(podcast.collectionId)}>
                                <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                                    <img className="rounded-lg w-full object-contain mb-1" 
                                      src={podcast.artworkUrl600} alt="content" />

                                    <div className="min-h-full h-14">
                                        <h2 className="text-left mt-2 home-screen-truncate-collection-name 
                                            text-sm text-white font-medium title-font">
                                            {podcast.collectionName}
                                        </h2>
                                        <p className="hidden md:block text-left pt-1 text-gray-400 text-xs">
                                          {podcast.artistName}
                                        </p>
                                        <p className="block md:hidden text-left pt-1 text-gray-400 text-xs">
                                          { podcast.artistName.length >= 30 
                                            ? 
                                            podcast.artistName.slice(0, 30) + '...' 
                                            : 
                                            podcast.artistName }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HomePodcastSection