import React from "react";
import { Router, Route, Link } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/Streams/new" component={StreamCreate} />
          <Route path="/Streams/edit/:id" component={StreamEdit} />
          <Route path="/Streams/delete" component={StreamDelete} />
          <Route path="/Streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
