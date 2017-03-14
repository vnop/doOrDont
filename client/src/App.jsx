import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Redirect } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <h1>What up</h1>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));