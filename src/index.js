import React from 'react';
import ReactDOM from 'react-dom';
import HomepageLayout from './app/index';


const App = () => (
  <div>
  <HomepageLayout />
  </div>
);

ReactDOM.render(<App />, document.getElementById('index'));
