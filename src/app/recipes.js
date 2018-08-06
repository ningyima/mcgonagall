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

        <Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Ingredients lists</Modal.Header>
            {this.props.recipes.map((recipe)=>{
                return <Modal.Content key={recipe.id} image>
                <a href={'http://www.' + recipe.sourceDisplayName + '.com/recipe/'+ recipe.recipeName.split(' ').join('-')}>
                  <Image  wrapped size='medium' src={recipe.smallImageUrls[0]}
                   />
                    <Modal.Description>
                    <Header>{recipe.recipeName}</Header>
                    <p>{'Rating: ' + recipe.rating}</p>
                    <p>{'Prep time: ' + recipe.totalTimeInSeconds/60 + ' minutes'}</p>

                  </Modal.Description>
                  </a>
                </Modal.Content>
             })}
        </Modal>
      </div>
    )
  }
}
export default RecipeList;



