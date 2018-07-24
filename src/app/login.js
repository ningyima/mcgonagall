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
          <Button color='facebook' onClick={() => {this.props.fbHandler();}} >
            <Icon name='facebook' /> Facebook
          </Button>
          <Button color='google plus' onClick={() => {this.props.googleHandler();}}>
            <Icon name='google plus' /> Google Plus
          </Button>
        </Modal.Content>
        <Modal.Content>
        <Form>
          <Form.Field>
             <label>username</label>
             <input placeholder='username' ref={this.handleRef} />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input placeholder='password' ref={this.handleRef} />
          </Form.Field>
          <Button type='submit' color="green" content="Submit" />
        </Form>
        </Modal.Content>
       </Modal>
      </div>

    );
  }
}

export default ModalLoginForm;
