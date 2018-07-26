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
      calorieRange: ['under 400 Cal.', '600', '800', '1000','1200', '1400', '1600', '1800', '2000', '2200', '2400' ],
      calQuery: {
        diet: '',
        targetCalories: '',
        timeFrame: ''
      },
      ingredientQuery: {
        fillIngredients: false,
        number: 20,
        ranking: 1,
        ingredients: ''
      }
    }
    this.updateCalQuery = this.updateCalQuery.bind(this);
    this.updateIngredientQuery = this.updateIngredientQuery.bind(this);
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

  render(){
    return (
    <div className="call-to-action">

      {/* RECIPES BY DYNAMIC INPUT
          This functionality is still being developed
      */}
      <form className="ui form">
      <h3>Filter recipes by cuisine, diet and </h3>
        <div className="three fields">
          <div className="six wide field">
            <select className="ui fluid search selection dropdown">
              <option>Select Cuisine</option>
              {this.state.cuisine.map((type) => {
                return <option key={type} value={type}>{type}</option>})}
            </select>
          </div>
          <div className="six wide field">
            <select className="ui fluid search selection dropdown">
              <option>Select Diet Type</option>
              <option>Ketogenic</option>
              <option>Paleo</option>
              <option>Primal</option>
              <option>Vegan</option>
              <option>Vegetarian (Lacto and Ovo)</option>
              <option>Whole 30</option>
            </select>
          </div>
          <div className="four wide field">
            <Button  color="green" size='medium' animated content='Retrieve Recipes &nbsp; &nbsp; &nbsp; &nbsp;' />
          </div>
        </div>
      </form>


    {/* RECIPES BY MEAL PLAN
        Diet type and maximum daily calories are used to retrieve recipes either for a day or a month so that users can have full mean plan ideas.
        - state variable calQuery is updated based on changes to controls
        - on submit the button name, routing path and event name are sent to the parent comonent to be used in the ajax request
    */}
      <div style={{ padding: '2em 0em' }}>
        <form className="ui form">
          <h3>Select meal plans by diet type and total daily calories.  Meal plans may be for one day or one full week (21 meals) </h3>
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
              <Button name="calBtn" onClick={(e) => {this.props.getRecipes('/calories',this.state.calQuery,e)}}
                color="green" size='medium'
                animated content='retrieve meal plan &nbsp; &nbsp; &nbsp; &nbsp;' />
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
        <h3>Select meals by ingredient(s).  Use commas to separete multiple items</h3>
          <div className="two fields">
            <div className="twelve wide field">
              <Input onChange={(e) => this.updateIngredientQuery(e)} fluid placeholder='Ingredients...' />
            </div>
            <div className="four wide field">
              <Button  name="btnIngredient"
                onClick={(e) => {this.props.openModal(e)}}
                color="green" size='medium' animated
                content="retrieve recipes &nbsp; &nbsp; &nbsp; &nbsp; " />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default SearchApiForm;