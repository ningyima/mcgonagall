import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomepageContent from './HomepageContent.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Features from './Features.jsx';

class HomepageLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    }
  }

  render() {
    return (
      <HomepageContent />
      
    )
  };
}
export default HomepageLayout;
