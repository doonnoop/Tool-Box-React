import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends Component{
  render() {
    return <div className="container">
      <Jumbotron className="jumbotron">
        <h1>Hello, everyone!</h1>
        <p>Welcome to my home page</p>
      </Jumbotron>
    </div>
  }
}

export default Home;
