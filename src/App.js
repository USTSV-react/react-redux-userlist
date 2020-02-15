import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "./components/List";
import Details from "./components/Details";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/user/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
