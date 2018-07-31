import React, { Component } from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Content,
  Actions,
  Form,
  Icon,
  Checkbox,
} from 'semantic-ui-react';

import HomepageLayout from './index';

class ModalSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleRef = this.handleRef.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  handleRef(component) {
    this.ref = component;
  }

  open() {
    this.setState({ open: true }, () => this.ref.focus());
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open, dimmer } = this.state;
    return (
      <div>
      <Button color='green' inverted primary content='Sign Up' onClick={this.open} style={{ marginLeft: '0.5em' }} />
       <Modal open={this.state.open} onClose={this.close}>
       <Modal.Content>
       <Modal.Description>
       <Header>
       Sign Up
       </Header>
       </Modal.Description>
       </Modal.Content>
       <Modal.Content>
          <a href='auth/facebook' >
          <Button color='facebook' >
            <Icon name='facebook' /> Facebook
          </Button> </a>
          <a href='auth/google' >
          <Button color='google plus'>
            <Icon name='google plus' /> Google Plus
          </Button> </a>
        </Modal.Content>
       <Modal.Content>
      <Form>
        <div className="two fields"> 
          <Form.Field>
             <label>First Name</label>
             <input placeholder='First Name' ref={this.handleRef} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' ref={this.handleRef} />
          </Form.Field>
        </div>
        <div className="two fields"> 
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' ref={this.handleRef} />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' ref={this.handleRef} />
          </Form.Field>
        </div>
        <div className="two fields">
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' ref={this.handleRef} />
          </Form.Field>
          <Form.Field>
            <label>COnmfirm Password</label>
            <input placeholder='Confirm Password' ref={this.handleRef} />
          </Form.Field>
        </div>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
          </Modal.Content>
       </Modal>
      </div>

    );
  }
}

export default ModalSignupForm;
