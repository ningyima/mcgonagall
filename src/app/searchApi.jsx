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
      calorieRange: ['under 400 Cal.', '401 - 600', '601 - 800', '801 - 1000','1001 - 1200', '1201 - 1400', '1401 - 1600', '1601 - 1800', '1801 - 2000', '2001 - 2200', '2201 - 2400' ]
    }

  }

  render(){
    return (
    <div className="call-to-action">
      
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
            <Button  color="green" size='medium' animated content='retrieve recipes &nbsp; &nbsp; &nbsp; &nbsp;' />
          </div>
        </div>
      </form>
        
      

      <div>
        <form className="ui form">
          <h3>Select daily/weekly meal plans by total daily calories</h3>
          <div className="three fields"> 
            <div className="six wide field">
              <select className="ui fluid search selection dropdown"> 
                <option>Meal Plan by Calories</option>
                  {this.state.calorieRange.map((range) => {
                    return <option key={range} value={range}>{range}</option>})}
                  })
                }
              </select>
            </div>

            <div className="six wide field">
              <select className="ui fluid search selection dropdown"> 
                <option>Plan Type</option>
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>

            <div className="four wide field">
              <Button  color="green" size='medium' animated content='retrieve meal plan &nbsp; &nbsp; &nbsp; &nbsp;' />
            </div>
          </div>
        </form>
      </div>


      <div>
        <form className="ui form">
        <h3>Select meals by ingredient(s).  Use commas to separete multiple items</h3>
          <div className="three fields"> 
            <div className="twelve wide field">
              <Input fluid placeholder='Ingredients...' />
            </div>
            <div className="four wide field">
              <Button  color="green" size='medium' animated content="retrieve recipes &nbsp; &nbsp; &nbsp; &nbsp; " />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default SearchApiForm;