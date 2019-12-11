import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as postActions from "../actions/postActions";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.fetch_posts();
  }

  componentWillReceiveProps(nextProps) {
    const newPostHasValues =
      !Object.entries(nextProps.newPost).length === 0 &&
      nextProps.newPost.constructor === Object;

    if (newPostHasValues) {
      this.props.posts.items.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.items.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to={`/posts/${post.id}`}>
          <button>Show</button>
        </Link>
      </div>
    ));
    return (
      <div>
        <div>
          <Link to="/posts/new">
            <button>Add Post</button>
          </Link>
        </div>
        <div>{postItems}</div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetch_posts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  newPost: state.posts.item
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

// mapStateToProps - maps the state from reducer to the component and feeds in data as properties to component.
// mapDispatchToProps - maps all the actions which we have defined in the actions file to the component.
