import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  MemoryRouter
} from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/Streams/new" component={StreamCreate} />
          <Route path="/Streams/edit" component={StreamEdit} />
          <Route path="/Streams/delete" component={StreamDelete} />
          <Route path="/Streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
