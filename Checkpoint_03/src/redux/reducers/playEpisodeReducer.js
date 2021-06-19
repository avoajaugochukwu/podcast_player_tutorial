export const EPISODE_PLAY_REQUEST = 'EPISODE_PLAY_REQUEST'
export const EPISODE_PLAYING = 'EPISODE_PLAYING'
export const EPISODE_PAUSE = 'EPISODE_PAUSE'

const initialState = {
  loading: false,
  isPlaying: undefined,
  episode: {},
  error: false
}


export const playEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODE_PLAY_REQUEST:
      return {
        ...state,
        episode: action.payload,
        loading: true,
      }

    case EPISODE_PLAYING:
      return {
        ...state,
        isPlaying: true,
        loading: false
      }

    case EPISODE_PAUSE:
      return {
        ...state,
        isPlaying: false
      }

    default:
      return state
  }
}