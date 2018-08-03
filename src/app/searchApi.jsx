import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Form,
  Checkbox,
  View
} from 'semantic-ui-react';

class SearchApiForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cuisine: [ 'African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese' ],
      calorieRange: ['400', '600', '800', '1000','1200', '1400', '1600', '1800', '2000', '2200', '2400' ],
      calQuery: {
        diet: '',
        targetCalories: '',
        timeFrame: ''
      },
      mealCalorieRange: [
          '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300',  '1400', '1500'
      ],
      ingredientQuery: {
        fillIngredients: false,
        number: 20,
        ranking: 1,
        ingredients: ''
      },
      mealQuery: {
        cuisine: '',
        diet: '',
        instructionsRequired: true,
        intolerances: [],
        number: 25,
        offset: 0,
        query: '',
        maxCalories: '',
        ranking: 2
      }
    }

    this.updateCalQuery = this.updateCalQuery.bind(this);
    this.updateIngredientQuery = this.updateIngredientQuery.bind(this);
    this.updateMealQuery = this.updateMealQuery.bind(this);
  }

  updateCalQuery (event) {
    const temp = this.state.calQuery;
    event.target.name === 'targetCalories' ? temp['targetCalories'] = event.target.value : event.target.name === 'diet' ? temp['diet'] = event.target.value : temp['timeFrame'] = event.target.value;
    this.setState({
      calQuery: temp
    });
  }

  updateIngredientQuery (event) {
    const temp = this.state.ingredientQuery;
    temp['ingredients'] = event.target.value;
    this.setState({
      ingredientQuery: temp
    })
  }

  updateMealQuery (event) {
    const temp = this.state.mealQuery;
    event.target.name === 'cuisine' ? temp['cuisine'] = event.target.value :
    event.target.name === 'diet' ? temp['diet'] = event.target.value :
    event.target.name === 'query' ? temp['query'] = event.target.value :
    temp['maxCalories'] = event.target.value;
    this.setState({
      mealQuery: temp
    });
  }

  render(){
    return (
    <div className="call-to-action">

      {/* RECIPES BY DYNAMIC INPUT
          User is able to enter a meal of their choice e.g. burger, smoothie, rice, pasta etc. along with any combination of cuisine, diet type, and max calories and have 25 recipes returned.  From this returned list the user will be able to further select a specific recipe they wish to view in detail.  The input for each control is updated on change to the this.state.recipeQuery object and on submit of the form this object is passed along with the event itself up to the handler in the parent component.
      */}

      <div>
        <form className="ui form">
        <h3>Filter recipes by meal interest, cuisine, diet and/or calories.</h3>
          <div className="five fields">
            <div className="three wide field">
              <Input name="query" value={this.state.mealQuery.query}
                onChange={(e) => this.updateMealQuery(e)} fluid placeholder='desired meal e.g. pasta, burger, smoothie, etc...' />
            </div>
            <div className="three wide field">
              <select name="cuisine"
                className="ui fluid search selection dropdown"
                onChange={(e) => this.updateMealQuery(e)} >
                <option>Select Cuisine</option>
                {this.state.cuisine.map((type) => {
                  return <option key={type} value={type}>{type}</option>})}
              </select>
            </div>
            <div className="three wide field">
              <select name="diet"
                className="ui fluid search selection dropdown"
                onChange={(e) => this.updateMealQuery(e)} >
                <option>Select Diet Type</option>
                <option>Ketogenic</option>
                <option>Paleo</option>
                <option>Primal</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Whole 30</option>
              </select>
            </div>
            <div className="three wide field">
              <select name="maxCalories"
                onChange={(e) => this.updateMealQuery(e)}
                className="ui fluid search selection dropdown" >
                <option>max calories</option>
                  {this.state.mealCalorieRange.map((range) => {
                    return <option key={range} value={range}>{range}</option>})}
                  })
                }
              </select>
            </div>

            <div className="four wide field">
              <Button  name="mainBtn" className='btn'
                onClick={(e) => {this.props.getRecipes('/recipes',this.state.mealQuery,e); this.props.openModal(e)}}
                inverted size='medium' animated content='Retrieve Recipes &nbsp; &nbsp; &nbsp; &nbsp;' />

            </div>
          </div>
        </form>
      </div>

    {/* RECIPES BY MEAL PLAN
        Diet type and maximum daily calories are used to retrieve recipes either for a day or a month so that users can have full mean plan ideas.
        - state variable calQuery is updated based on changes to controls
        - on submit the button name, routing path and event name are sent to the parent comonent to be used in the ajax request
    */}
      <div style={{ padding: '2em 0em' }}>
        <form className="ui form">
          <h3>Select meal plans by diet type and total daily calories.&nbsp;&nbsp;Meal plans may be for one day or one full week (21 meals) </h3>
            <div className="four fields">
            <div className="four wide field">
              <select name="diet"
                onChange={(e) => this.updateCalQuery(e)}
                className="ui fluid search selection dropdown">
                <option>Select Diet Type</option>
                <option>Ketogenic</option>
                <option>Paleo</option>
                <option>Primal</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Whole 30</option>
              </select>
            </div>
            <div className="four wide field">
              <select name="targetCalories"
                onChange={(e) => this.updateCalQuery(e)}
                className="ui fluid search selection dropdown" >
                <option>Meal Plan by Calories</option>
                  {this.state.calorieRange.map((range) => {
                    return <option key={range} value={range}>{range}</option>})}
                  })
                }
              </select>
            </div>

            <div className="four wide field">
              <select name="timeFrame" onChange={(e) => this.updateCalQuery(e)} className="ui fluid search selection dropdown" >
                <option>Plan Type</option>
                <option>day</option>
                <option>week</option>
              </select>
            </div>

            <div className="four wide field">
              <Button name="calBtn" className='btn'
                onClick={(e) => {this.props.getRecipes('/calories',this.state.calQuery,e); this.props.openMeal(e)}}
                inverted size='medium' animated
                content='retrieve meal plan &nbsp; &nbsp; &nbsp; &nbsp;' />
            </div>
          </div>
        </form>
      </div>


      {/* RECIPES BY INGREDIENTS
        A single string of ingredients may be entered by the user as a comma delimited list.  This is used to retrieve recipes which include the set of provided ingredients.  20 results will be returned.
        - state variable ingredientQuery is updated based on changes to input cotrol
        - on submit the button name, routing path and event name are sent to the parent comonent to be used in the ajax request
    */}
      <div>
        <form className="ui form">
        <h3>Select meals by ingredient(s).&nbsp;&nbsp;Use commas to separete multiple items</h3>
          <div className="two fields">
            <div className="twelve wide field">
              <Input onChange={(e) => this.updateIngredientQuery(e)} fluid placeholder='Ingredients...' />
            </div>
            <div className="four wide field">
              <Button  name="btnIngredient" className='btn'
                onClick={(e) => {this.props.getRecipes('/ingredients',this.state.ingredientQuery,e); this.props.openModal(e)}}
                inverted size='medium' animated
                content="retrieve recipes &nbsp; &nbsp; &nbsp; &nbsp; " />
            </div>
          </div>
        </form>
      </div>

      {/* This is the field for user to input zipcode to return a modal with a pie chart of most popular cuisines in the db of that zipcode
    */}
      <div>
        <form className="ui form">
        <h3>Check cuisine popularity by zip code</h3>
          <div className="two fields">
            <div className="twelve wide field">
              <Input onChange={(e) => this.updateZipcode(e)} fluid placeholder='Zip code...' />
            </div>
            <div className="four wide field">
              <Button  name="btnIngredient" className='btn'
                onClick={(e) => { this.props.setToZip(e)}}
                inverted size='medium' animated
                content="What's zippy? &nbsp; &nbsp; &nbsp; &nbsp; " />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default SearchApiForm;