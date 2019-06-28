import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as postActions from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetch_posts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.items.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.items.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postItems}</div>;
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
