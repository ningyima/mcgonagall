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

import DesktopContainer from './DesktopContainer.jsx';
import MobileContainer from './MobileContainer.jsx';

const HomepageLayout = () => 
  <Container>
    <DesktopContainer />
    <MobileContainer />
  </Container>;

export default HomepageLayout;
