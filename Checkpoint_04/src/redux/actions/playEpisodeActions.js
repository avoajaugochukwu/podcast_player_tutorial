import { EPISODE_PLAY_REQUEST, EPISODE_PLAYING, EPISODE_PAUSE } from '../reducers/playEpisodeReducer'

export const play = (episode) => async (dispatch) => {

  const episodeDetails = getEpisodeDetails(episode)
  
  dispatch ({
    type: EPISODE_PLAY_REQUEST,
    payload: episodeDetails
  })

  try {
    dispatch({
      type: EPISODE_PLAYING
    })
  } catch (error) {
    console.log(error)
  }
}

export const pause = () => (dispatch) => {
  dispatch({
    type: EPISODE_PAUSE
  })
}

export const getEpisodeDetails = (episode) => {
  // episode object has so many properties, take only relevant ones
  const { episodeUrl, artworkUrl60, trackId, trackTimeMillis, trackName, shortDescription, collectionName } = episode

  const episodeDetails = {
    episodeUrl,
    artworkUrl60, 
    trackId, 
    trackTimeMillis, 
    trackName, 
    shortDescription, 
    collectionName
  }
  return episodeDetails
}