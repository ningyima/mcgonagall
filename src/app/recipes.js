import React, { Component } from 'react';
import HomepageLayout from './index';
import RecipeDetails from './recipeDetails';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="">
      { this.props.recipes.length === 25 ?
        <Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Ingredients lists</Modal.Header>
            {this.props.recipes.map((recipe)=>{
                return <Modal.Content key={recipe.id} image>
                  <Image  wrapped size='medium' src={recipe.image} onClick={(e)=>{this.props.getRecipe(recipe.id,e); this.props.openDetails(e, recipe.image)}}/>
                  <Modal.Description>
                    <Header>{recipe.title}</Header>
                    <p>{'Calories: ' + recipe.calories}</p>
                    <p>Let budgetLife be your guide</p>
                  </Modal.Description>
                </Modal.Content>
             })}
        </Modal> :

        <Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Ingredients lists</Modal.Header>
            {this.props.recipes.map((recipe)=>{
                return <Modal.Content key={recipe.id} image>
                  <Image  wrapped size='medium' src={recipe.image} onClick={(e)=>{this.props.getRecipe(recipe.id,e); this.props.openDetails(e, recipe.image)}}/>
                  <Modal.Description>
                    <Header>{recipe.title}</Header>
                    <p>Good flavor</p>
                    <p>Let budgetLife be your guide</p>
                  </Modal.Description>
                </Modal.Content>
             })}
        </Modal>
      }
      </div>
    )
  }
}
export default RecipeList;



