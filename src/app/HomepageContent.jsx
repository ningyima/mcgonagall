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
import DesktopContainer from './DesktopContainer.jsx';
import MobileContainer from './MobileContainer.jsx';


const HomepageContent = () => (
  <div>
    <DesktopContainer />
    <MobileContainer />
  </div>
)

HomepageContent.propTypes = {
  children: PropTypes.node,
}

export default HomepageContent;