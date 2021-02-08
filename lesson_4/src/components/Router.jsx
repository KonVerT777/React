import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Profile from './Profile'

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path='/chat/:chatId/' render={ obj => <Layout chatId={obj.match.params.chatId} />} />
        <Route path='/profile/' component={Profile}/>
      </Switch>
    );
  }
}