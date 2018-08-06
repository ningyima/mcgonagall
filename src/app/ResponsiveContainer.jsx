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

class ResponsiveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutrients: {},
      recipes: [],
      open:false,
      openDetails:false,
      openMeal:false,
      recipeSteps:[],
      recipeIngredients: [],
      calories:'',
      image:'',
      calorie:'',
      zipcodeData: dummyData,
      zipcode: '',
      view: ''
    }

    // this.handleDemoClick = this.handleDemoClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.openMeal = this.openMeal.bind(this);
    this.closeMeal = this.closeMeal.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.setToZip = this.setToZip.bind(this);
    this.openZipModal = this.openZipModal.bind(this);
    this.updateZipcode = this.updateZipcode.bind(this);
  }

  close(){
    this.setState({
      open:false
    })
  }

  open(e){
    e.preventDefault();
    this.setState({
      open:true
    })
  }

  closeDetails(){
    this.setState({
      openDetails:false
    })
  }

  openDetails(e, img, cal){
    e.preventDefault();
    this.setState({
      openDetails:true,
      image: (cal!==undefined) ? [img, cal] : img
    })
  }

  closeMeal(){
    this.setState({
      openMeal:false
    })
  }

  openMeal(e){
    e.preventDefault();
    this.setState({
      openMeal:true,
    })
  }

  getRecipe(id, e){

    this.setState({
      recipeSteps:[],
      calories:'',
      recipeIngredients: []
    });

    e.preventDefault();
    axios.get('/recipe', {params: {recipeId:id}})
    .then((data) =>  {
      this.setState({
        recipeSteps: data.data.analyzedInstructions,
        recipeIngredients: data.data.extendedIngredients,
        calories: data.data.calories
      });
      console.log('Data successfully retrieved from server. ',data.data.analyzedInstructions);
    })
    .catch((err) => {
      console.log('ERROR=== ', err);
    });
  }

  getRecipes (path, param, e) {
    this.setState({
        recipes:[],
    });

    e.preventDefault();
    axios.get(path, {params: param})
    .then(({data}) =>  {
      console.log(data);
      if (data.nutrients !== undefined) {
        this.setState({
          nutrients: data.nutrients
        })
      }
      this.setState({
        recipes: (data.results !== undefined) ? data.results :
        (data.meals !== undefined) ? data.meals :
        (data.items !== undefined) ? data.items : data,
      });
      console.log('Data successfully retrieved from server. ',this.state.recipes);
    })
    .catch((err) => {
      console.log('ERROR=== ', err.response.data);
    });
  }

  getZipcodeData (path, param, e) {
    e.preventDefault();
    axios.get(path, {params: param})
    .then(({data}) => {
      console.log('what are the fav cuisines', data);
      //depends if there is a table with that zipcode in db
        //if not then return some sort of message
      //also check structure of data
      if (data.zipcodeData !== undefined) {
        this.setState({
          zipcodeData: data.zipcodeData
        })
        //now the favorite cuisines info is ready to be passed to the popup modal to show to user as a pie chart
      }
    })
    .catch((err) => {
      console.log('error...could not get top favs by zip', err.response.data)
    });
  }

   setToZip (e) {
    e.preventDefault();
    this.setState({
        view: 'zip'
    });
    console.log('is zip showing', this.state.view)
  }

  openZipModal() {
    if (this.state.view === 'zip') {
      console.log('show the zip fav')
      return (
        <ZipPieChart data={this.state.zipcodeData}/>
        )
    }
  }

  updateZipcode (event) {
    const previousZipcode = this.state.zipcode;

    this.setState({
      zipcode: event.target.value
    })
  }

  render() {
    return (
      <Container>

      <Divider section />

      <Segment style={{ padding: '2em'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row >
          <Grid.Column >
            <SearchApiForm className="call-to-action"
              getRecipes={this.getRecipes}
              openModal = {this.open}
              openMeal = {this.openMeal}
              getZipcodeData={this.getZipcodeData}
              updateZipcode={this.updateZipcode}
              setToZip={this.setToZip}/>
            <RecipesList recipes={this.state.recipes} open={this.state.open} openDetails={this.openDetails} close={this.close} getRecipe={this.getRecipe} />
            <RecipeDetails calories={this.state.calories} recipe={this.state.recipeSteps} ingredients={this.state.recipeIngredients} image={this.state.image} open={this.state.openDetails} close={this.closeDetails}/>
            <MealView recipes = {this.state.recipes} open={this.state.openMeal} close={this.closeMeal} getRecipe={this.getRecipe} openDetails={this.openDetails}/>
             <div className="openZipModal">
              {this.openZipModal()}
            </div>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '1em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I can always rely on Budget Life to elevate  $5 of basic ingredients into a rustic dish fit for a three Michelin star restaurant."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                G. Ramsay, average user of Budget Life
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '1em 0em' }} vertical>
         <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as='h3' style={{ fontSize: '2em' }}>
           Powered By:
          </Header>
          <p style={{ fontSize: '1.33em' }}>
          <img src='https://i.imgur.com/htRUN4o.png' width={1000} height={250}/>
         </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted vertical style={{ padding: '1em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item href='#' as='a'>Sitemap</List.Item>
                  <List.Item href='#' as='a'>Contact Us</List.Item>
                  <List.Item href='#' as='a'>Team hours</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item href='#' as='a'>Feature List</List.Item>
                  <List.Item href='#' as='a'>Membership</List.Item>
                  <List.Item href='#' as='a'>Renown recipes</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </Container>
    )
  }
}

export default ResponsiveContainer;