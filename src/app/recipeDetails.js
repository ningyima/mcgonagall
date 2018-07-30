import React, { Component } from 'react';
import HomepageLayout from './index';

import { Button, Header, Image, Modal } from 'semantic-ui-react';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="">
      { Array.isArray(this.props.image) ?
        (<Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Recipe Details</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='large' src={this.props.image}/>
                  <Modal.Description>
                    <Header>Instructions</Header>
                      <span>{'Calories: '+ this.props.recipe.calories}<br/><br/></span>
                      {this.props.recipe.map((step)=>{
                        return <span>{'Step ' + step.number + ': ' +step.step} <br/><br/></span>
                      })}
                  </Modal.Description>
                </Modal.Content>
        </Modal>):
        (<Modal open={this.props.open} onClose={()=>{this.props.close()}} closeIcon>
          <Modal.Header>Recipe Details</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='large' src={this.props.image}/>
                  <Modal.Description>
                    <Header>Instructions</Header>
                      {this.props.recipe.map((step)=>{
                        return <span>{'Step ' + step.number + ': ' +step.step} <br/><br/></span>
                      })}
                  </Modal.Description>
                </Modal.Content>
        </Modal>)
      }
      </div>
    )
  }
}
export default RecipeDetails;



