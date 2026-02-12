import React from "react";
import { Switch, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Profile from "./Profile";

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Messages} />
        <Route
          exact path="/chat/:chatId/"
          render={obj => <Messages chatId={obj.match.params.chatId} />}
        />
        <Route path="/profile/" component={Profile} />
      </Switch>
    );
  }
}
