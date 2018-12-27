import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  //call when the component gets render
  //component life cycle method
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  //function to render the buttons in modal
  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  //function to render the text in modal
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `are you sure you want to delete ${this.props.stream.title}`;
  }

  //render modal
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

//state props mapping
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

//redux connect
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
