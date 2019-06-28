import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../actions/postActions";

class NewPost extends Component {
  state = { title: "", body: "" };

  onChange = e => {
    console.log("on text input");
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add new post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <textarea
              type="textarea"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const MapStateToProps = state => {};

const MapDispatchToProps = dispatch => {
  return bindActionCreators(postActions, dispatch);
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(NewPost);
