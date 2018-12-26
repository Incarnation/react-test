import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  //state = { isSignedIn: null };

  //when the component luauch
  componentDidMount() {
    //load google auth2
    window.gapi.load("client:auth2", () => {
      //callback to initilize the oauth client
      window.gapi.client
        .init({
          clientId:
            "336542833625-nib2glh60p1clt6be00r0bj58aqv9jg6.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //get the ouath instance
          this.auth = window.gapi.auth2.getAuthInstance();

          //rerender the page
          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());

          //listening the sign in status of the user
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //re-render the page for the change of signin status
  onAuthChange = isSignedIn => {
    /*
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
    */

    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  //sign in button
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui orange google button" onClick={this.auth.signOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.auth.signIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
