import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class MealView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('we are on MealView: ',this.props);
    const mealName = ['Day 1', 'Day 2', 'Day 3', 'Day 4','Day 5','Day 6','Day 7'];
    const ind = 0;
    return(
      <div className="">
      { this.props.recipes.length===3 ?
        <Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Meal plan per day</Modal.Header>
          {this.props.recipes.map((recipe)=>{
            return <Modal.Content key={recipe.id} image>
                    <Image  wrapped size='medium' src={`https://spoonacular.com/recipeImages/`+recipe.image} onClick={(e)=>{this.props.getRecipe(recipe.id,e); this.props.openDetails(e, recipe.image, 'yes')}}/>
                    <Modal.Description>
                      <Header>{recipe.title}</Header>
                      <p>{'Preparation time: ' + recipe.readyInMinutes}</p>
                      <p>Let budgetLife be your guide</p>
                    </Modal.Description>
                  </Modal.Content>
             })}
        </Modal>:
        <Modal open={this.props.open}>
          <Modal.Header>Meal plan per week</Modal.Header>

        </Modal>
        }
      </div>
    )

  }
}
export default MealView;
