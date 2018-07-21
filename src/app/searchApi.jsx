import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Content,
  Actions,
  Form,
  Checkbox
} from 'semantic-ui-react';

import HomepageLayout from './index.js';

class SearchApiForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cuisine: [ 'African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese' ] 
    }

  }

  render(){
    return (
    <div>
      <div> 
        <form>
          <select>
            <option>Select Cuisine</option>
            this.state.cuisine.forEach(function(type) {
              <option>{type}</option>
            });
            
          </select>
          
          <select> 
            <option>Select Diet Type</option>
            <option>Ketogenic</option>
            <option>Paleo</option>
            <option>Primal</option>
            <option>Vegan</option>
            <option>Vegetarian (Lacto and Ovo)</option>
            <option>Whole 30</option>
          </select>
        </form>
        
      </div>

      <div>
        <form>
        <legend>Select daily/weekly meal plans by total calories</legend>
          <select>
              <option>Meal Plan by Calories</option>
              <option>under 400 Cal</option>
              <option>401 - 600</option>
              <option>601 - 800</option>
              <option>801 - 1000</option>
              <option>1001 - 1200</option>
              <option>1201 - 1400</option>
              <option>1401 - 1600</option>
              <option>1601 - 1800</option>
              <option>1801 - 2000</option>
              <option>2001 - 2200</option>
              <option>2201 - 2400</option>
          </select>

          <select>
              <option>Plan Type</option>
              <option>Daily</option>
              <option>Weekly</option>
          </select>
        </form>
      </div>


      <div>
        <form>
        <legend>Select meals by ingredient(s).  Use commas to separete multiple items</legend>
          <Input fluid icon='search' placeholder='Ingredients...' />
        </form>
      </div>

    </div>
    )
  }
}

export default SearchApiForm;