// 1. Import the separate reducers
const redux = require('redux')
const { combineReducers } = redux
import countReducer from './count' 
import favoriteThingsReducer from './favoriteThings'
import youTubeVideoReducer from './youTubeVideo'


// 2. Combine them into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youTubeVideo: youTubeVideoReducer
})

// 3. Create the store. Pass the reducer to the store
const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})
export default store

// 4. Export the store
