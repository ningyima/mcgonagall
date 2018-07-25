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
  Checkbox,
} from 'semantic-ui-react';

import HomepageLayout from './index';

class ModalLoginForm extends Component {
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
       <Button color='green' inverted primary content='Log In' onClick={this.open} style={{ marginLeft: '0.5em' }} />
       <Modal open={this.state.open} onClose={this.close}>
       <Modal.Content>
       <Modal.Description>
       <Header>
       Log In
       </Header>
       </Modal.Description>
       </Modal.Content>
       <Modal.Content>
      <Form>
        <Form.Field>
           <label>First Name</label>
           <input placeholder='First Name' ref={this.handleRef} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' ref={this.handleRef} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button className='g-signin2' data-onsuccess='onSignIn'>Google Login</Button>
        <Button type='submit'>Facebook</Button>
      </Form>
          </Modal.Content>
       </Modal>
      </div>

    );
  }
}

export default ModalLoginForm;
