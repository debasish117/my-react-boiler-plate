import { FETCH_POSTS, NEW_POST } from "./types";

export const fetch_posts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS, // from here it goes to reducer which will check for a matching case in switch case statement
        payload: posts
      })
    );
};

export const createPost = post => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST, // from here it goes to reducer which will check for a matching case in switch case statement
        payload: post
      })
    );
};
