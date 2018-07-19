import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomepageLayout from './app/index.js';


const App = () => (
  <div>
  <HomepageLayout />
  </div>
);

ReactDOM.render(<App />, document.getElementById('index'));