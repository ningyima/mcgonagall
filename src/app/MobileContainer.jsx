import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import SearchExampleStandard from './search.js';
import ModalSignupForm from './signup.js';
import ModalLoginForm from './login.js';

import { Link } from 'react-router-dom';
import HomepageHeading from './HomepageHeading.jsx';
import ResponsiveContainer from './ResponsiveContainer.jsx';

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handlePusherClick = this.handlePusherClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handlePusherClick() {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle() {
    this.setState({ sidebarOpened: !this.state.sidebarOpened })
  }

  handleLoginClick (){
    alert('mobile login button clicked');

  }

  handleSignupClick () {
  alert('mobile signup btn clicked');
  }


  render() {
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
             <Menu.Item>
                <Image size="mini" src="https://image.flaticon.com/icons/svg/424/424067.svg" />
                </Menu.Item>
            <Menu.Item href='#' as='a' active>
              Home
            </Menu.Item>
            <Menu.Item href='#' as='a'>Our Mission</Menu.Item>
            <Menu.Item href='#' as='a'>Features</Menu.Item>
            <Menu.Item href='#' as='a'>Benefits</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  <SearchExampleStandard size='mini' fluid/>
                    <ModalLoginForm loginHandler={this.handleLoginClick} />
                    <ModalSignupForm signupHandler={this.handleSignupClick} />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
            <ResponsiveContainer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;