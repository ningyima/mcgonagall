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

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchExampleStandard from './search.js';
import ModalSignupForm from './signup.js';
import ModalLoginForm from './login.js';
import About from './About.jsx';
import Features from './Features.jsx';
import ResponsiveContainer from './ResponsiveContainer.jsx';
import HomepageHeading from './HomepageHeading.jsx';
import Footer from './Footer.jsx';

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      // fixed: true
    };
    this.changeView = this.changeView.bind(this);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;
    console.log(this.state);
    if (view === 'home') {
      return <ResponsiveContainer />;
    } else if (view === 'about') {
      return <About />
    } else {
      return <Features />
    }
  }

  handleLoginClick (){
    alert('login desktop button clicked');
  }

  handleSignupClick () {
  alert('signup desktop button clicked');
  }

  hideFixedMenu() {
    this.setState({ fixed: false })
  }
  showFixedMenu() {
    this.setState({ fixed: true })
  }

  render() {
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >             
              <Container>
                <Menu.Item>
                <Image size="mini" src="https://image.flaticon.com/icons/svg/424/424067.svg" />
                </Menu.Item>
                <Menu.Item as='a' href='javascript:void(0)' onClick={() => this.changeView('home')} active>
                  Home
                </Menu.Item>
                <Menu.Item as='a' href='javascript:void(0)' onClick={() => this.changeView('about')}>About</Menu.Item>
                <Menu.Item as='a' href='javascript:void(0)' onClick={() => this.changeView('features')}>Features</Menu.Item>
                <Menu.Item position='right'>
                  <SearchExampleStandard fluid/>
                  <ModalLoginForm loginHandler={this.handleLoginClick} />
                  <ModalSignupForm signupHandler={this.handleSignupClick} />
                </Menu.Item>
              </Container>            
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
      
        <div className="main">
          {this.renderView()}
        </div>

        <Footer />
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;