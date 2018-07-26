import React, { Component } from 'react';
import HomepageLayout from './index';

import { Button, Header, Image, Modal } from 'semantic-ui-react';
//import HomepageLayout from './index';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleRef(component) {
    this.ref = component;
  }

  render() {
    console.log('we have value: ',this.props);
    return(
      <div className="">
        <Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Ingredients lists</Modal.Header>
            {this.props.recipes.map((recipe)=>{
                return <Modal.Content image>
                  <Image wrapped size='medium' src={recipe.image} />
                  <Modal.Description>
                    <Header>{recipe.title}</Header>
                    <p>Good flavor</p>
                    <p>Let budgetLife be your guide</p>
                  </Modal.Description>
                </Modal.Content>
             })}
        </Modal>
      </div>
    )
  }
}
export default RecipeList;



