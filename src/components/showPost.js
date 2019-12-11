import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowPost extends Component {
  state = {
    post: {}
  };
  componentDidMount() {
    const post_id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then(res => res.json())
      .then(post => this.setState({ post }));
  }

  render() {
    let { id, title, body } = this.state.post;
    return (
      <div key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/posts/${id}/comments`}>
          <button>Comments</button>
        </Link>
      </div>
    );
  }
}

export default ShowPost;
