import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  //constructor
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  //function call when the component gets render first time
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);

    this.buildPlayer();
  }

  //after the component render the second time
  componentDidUpdate() {
    this.buildPlayer();
  }

  //life cycle method when user leave the page
  //clean up the resources when user leave the page
  componentWillUnmount() {
    this.player.destroy();
  }

  //helper method to create the flv player
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const id = this.props.match.params.id;
    //add the player to the screen using the flv library
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  //render the show stream component
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
