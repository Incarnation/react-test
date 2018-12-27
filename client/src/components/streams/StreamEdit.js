import React from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  constructor(props) {
    super(props);

    //this.renderInput = this.renderInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //call when the component gets render
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  //submit callback function
  onSubmit(values) {
    this.props.updateStream(this.props.match.params.id, values);
  }

  //render the component
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>

        {/* pass the values to redux form of the initialValues props of a redux form*/}
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description
          }}
        />
      </div>
    );
  }
}

//mapping state to the props
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);
