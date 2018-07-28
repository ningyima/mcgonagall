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

/*HEADING*/

const HomepageHeading = ({ mobile }) => (
    <Container text>
    <Image src="https://www.ppt-backgrounds.net/uploads/food-template-presentation.jpg" style={{
      position: 'absolute',
      height: 'auto',
      width: mobile ? '99%' : '104%',
      top: mobile ? '79px' :'84px',
      right: mobile ? '2px' : '0px',
      maxWidth: '2000px',
      maxHeight: '639px',
    }} />
      <Header
        as='h1'
        content='BudgetLife'
        style={{
          fontFamily: 'Lobster' && 'cursive',
          color: 'white',
          position: 'relative',
          fontSize: mobile ? '3em' : '8em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '1.5em',
        }}
      />
      <Header
        as='h2'
        content='Save money. Eat Healthier.'
        style={{
          color: 'white',
          position:'relative',
          fontSize: mobile ? '1.0em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '1.0em' : '1.5em',
        }}
      />
    </Container>
  )

/*DESKTOP*/

class DesktopContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.hideFixedMenu = this.hideFixedMenu.bind(this);
      this.showFixedMenu = this.showFixedMenu.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleSignupClick = this.handleSignupClick.bind(this);
      //alert ('in the Desktop COntainer with '+ props.demoTest);
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
      const { children } = this.props;
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
                  <Menu.Item href='#' as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item href='#' as='a'>About</Menu.Item>
                  <Menu.Item href='#' as='a'>Features</Menu.Item>
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
  
          {children}
        </Responsive>
      )
    }
  }
