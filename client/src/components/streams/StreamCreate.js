import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

//create stream component
class StreamCreate extends React.Component {
  constructor(props) {
    super(props);

    //this binding
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    //event.preventDefault();
    this.props.createStream(values);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
