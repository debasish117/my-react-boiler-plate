import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as commentActions from "../actions/commentActions";

class Comments extends Component {
  componentWillMount() {
    this.props.fetch_comments();
  }

  render() {
    const commentItems = this.props.comments.items.map(comment => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
      </div>
    ));
    return <div>{commentItems}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(commentActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
