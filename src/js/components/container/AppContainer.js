import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AuthenticationContainer from './AuthenticationContainer';
import HomeContainer from './HomeContainer';

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={AuthenticationContainer} />
        <Route path="/home" component={HomeContainer} />
      </div>
    )
  }
}

export default AppContainer;

