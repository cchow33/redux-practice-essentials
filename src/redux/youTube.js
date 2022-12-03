function setYouTubeTitle(title) {
  return {
      type: "SET_YOUTUBE_TITLE",
      payload: title
  }
}

function incrementViewCount() {
  return {
      type: "INCREMENT_VIEW_COUNT"
  }
}

function upvoteVideo() {
  return {
      type: "UPVOTE_VIDEO"
  }
}

function downvoteVideo() {
  return {
      type: "DOWNVOTE_VIDEO"
  }
}

