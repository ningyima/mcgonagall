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
import { Link } from 'react-router-dom';
import HomepageContent from './HomepageContent.jsx';

class HomepageLayout extends Component {
  constructor(props) {
   super(props);
  }

  render() {
    return (
      <HomepageContent />
    )
  };
}
export default HomepageLayout;
