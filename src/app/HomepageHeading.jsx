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

const HomepageHeading = ({ mobile }) => (
  <Container text>
  <Image src="https://www.ppt-backgrounds.net/uploads/food-template-presentation.jpg" style={{
    position: 'absolute',
    height: 'auto',
    width: mobile ? '99%' : '104%',
    top: mobile ? '79px' :'84px',
    right: mobile ? '2px' : '0px',
    maxWidth: '2000px',
    maxHeight: '639px',
  }} />
    <Header
      as='h1'
      content='BudgetLife'
      style={{
        fontFamily: 'Lobster' && 'cursive',
        color: 'white',
        position: 'relative',
        fontSize: mobile ? '3em' : '8em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1.5em',
      }}
    />
    <Header
      as='h2'
      content='Save money. Eat Healthier.'
      style={{
        color: 'white',
        position:'relative',
        fontSize: mobile ? '1.0em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '1.0em' : '1.5em',
      }}
    />
    <Button href='#' primary size='huge' inverted color="green" animated>
      <Button.Content visible>
      Get Started
      </Button.Content>
      <Button.Content hidden>
      <Icon name='right arrow' />
      </Button.Content>
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;