import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { playEpisodeReducer } from './reducers/playEpisodeReducer'

const initialState = {
  currentTrack: { episode : {episodeUrl: undefined}}
}

const reducer = combineReducers({
  currentTrack: playEpisodeReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store