import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Video from "./Video_container/Video";
import Weather from "./Weather";
import PageNotFound from "./PageNotFound";
import Navigation from './Navigation';



class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/video" render={() => {
            return <Video />
          }} />
          <Route path="/weather" render={() => {
            return <Weather />
          }} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
