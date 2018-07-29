import React from 'react';
import ReactDOM from 'react-dom';
import HomepageLayout from './app/index';
import './main.css';


const App = () => (
  <div>
  <HomepageLayout />
  </div>
);

ReactDOM.render(<App />, document.getElementById('index'));
