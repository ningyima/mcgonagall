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
import HomepageHeading from './HomepageHeading.jsx';
import About from './About.jsx';
import Features from './Features.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.onItemChange.bind(this);
  }
  // onItemChange = (e, { name }) => this.props.onItemClick(name);
  render() {
    return (
      <div>
        <Container>
          <Menu secondary stackable widths={4}>
            <Menu.Item>
              <img src={Logo} alt="header" />
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/"
              name="home"
              active={this.props.isActive === 'home'}
              onClick={(event, name) => this.handleClick(name.name, name.to)}
            >
              <Icon name="home" size="large" />
              <p>Home</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/about"
              name="about"
              active={this.props.isActive === 'about'}
              onClick={this.onItemChange}
            >
              <Icon name="dashboard" size="large" />
              <p>About</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/features"
              name="features"
              active={this.props.isActive === 'features'}
              onClick={this.onItemChange}
            >
              <Icon name="user" size="large" />
              <p>Features</p>
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default Navbar;
