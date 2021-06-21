import React from 'react'

const EpisodeDuration = ({ duration }) => {

    let new_duration = ''

    if (duration) {
        new_duration = Math.floor((duration / 1000) / 60) + " min"
    }
    
    return (
        <div>
            {
                new_duration ?
                <>
                    <span className="px-1">&bull;</span>
                    <span className="text-xs">
                        {new_duration}
                    </span>
                </>
                :
                <></>
            }
            
        </div>
    )
}

export default EpisodeDuration