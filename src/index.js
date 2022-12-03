import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { combineReducers } from '@reduxjs/toolkit';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"

const container = document.getElementById('root');
const root = createRoot(container);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(changeCount(42))
// {count: 42, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}
store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())
/*

{count: 42, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells", "Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 1}}}


*/

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
