import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          //listening the sign in status of the user
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //re-render the page for the change of signin status
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  //sign in button
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
