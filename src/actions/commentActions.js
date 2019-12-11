import { FETCH_COMMENTS } from "./types";

export const fetch_comments = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};
