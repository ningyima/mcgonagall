import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
} from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handlePusher = this.handlePusher.bind(this);
  }

  handlePusher() {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  }

  handleToggle() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;
    return (
      <div>
      <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
   )
  }
}

const NavBarMobile = ({ children, leftItems, rightItems, onPusherClick, onToggle, visible }) => (
    <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src="" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  );

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="" />
    </Menu.Item>
    {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "About", key: "about" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Sign Up", key: "Sign Up" }
];

const App = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems}>
    <Image src="" />
  </NavBar>
);


ReactDOM.render(<App />, document.getElementById('index'));