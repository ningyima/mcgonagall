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
import SearchExampleStandard from './search.js';
import ModalSignupForm from './signup.js';
import ModalLoginForm from './login.js';
import SearchApiForm from './searchApi.jsx';
import RecipesList from './recipes.js';
import RecipeDetails from './recipeDetails.js';
import ZipPieChart from './zipPieChart.js'
import MealView from './mealView.js';
import data from './data.js';
import dummyData from './../dummyData.js';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import HomepageHeading from './HomepageHeading.jsx';
import DesktopContainer from './DesktopContainer.jsx';
import MobileContainer from './MobileContainer.jsx';

const ResponsiveContainer = ({ demoTest, children }) => (
  <div>
    <DesktopContainer demoTest={demoTest}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;