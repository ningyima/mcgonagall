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
import SearchApiForm from './searchApi.jsx';
import RecipesList from './recipes.js';
import RecipeDetails from './RecipeDetails';
import ZipPieChart from './zipPieChart.js'
import MealView from './mealView.js';
import data from './data.js';
import dummyData from './../dummyData.js';
import $ from 'jquery';

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
    <Button href='#' primary size='huge' inverted color="green" animated>
      <Button.Content visible>
      Get Started
      </Button.Content>
      <Button.Content hidden>
      <Icon name='right arrow' />
      </Button.Content>
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

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

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

/*MOBILE*/

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
    const { children } = this.props
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

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ demoTest, children }) => (
  <div>
    <DesktopContainer demoTest={demoTest}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class HomepageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutrients: {},
      recipes: [],
      open:false,
      openDetails:false,
      openMeal:false,
      recipeSteps:[],
      recipeIngredients: [],
      calories:'',
      image:'',
      calorie:'',
      zipcodeData: dummyData,
      zipcode: '',
      view: ''
    }

    // this.handleDemoClick = this.handleDemoClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.openMeal = this.openMeal.bind(this);
    this.closeMeal = this.closeMeal.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.setToZip = this.setToZip.bind(this);
    this.openZipModal = this.openZipModal.bind(this);
    this.updateZipcode = this.updateZipcode.bind(this);
  }

  close(){
    this.setState({
      open:false
    })
  }

  open(e){
    e.preventDefault();
    this.setState({
      open:true
    })
  }

  closeDetails(){
    this.setState({
      openDetails:false
    })
  }

  openDetails(e, img, cal){
    e.preventDefault();
    this.setState({
      openDetails:true,
      image: (cal!==undefined) ? [img, cal] : img
    })
  }

  closeMeal(){
    this.setState({
      openMeal:false
    })
  }

  openMeal(e){
    e.preventDefault();
    this.setState({
      openMeal:true,
    })
  }

  getRecipe(id, e){

    this.setState({
      recipeSteps:[],
      calories:'',
      recipeIngredients: []
    });

    e.preventDefault();
    axios.get('/recipe', {params: {recipeId:id}})
    .then((data) =>  {
      this.setState({
        recipeSteps: data.data.analyzedInstructions,
        recipeIngredients: data.data.extendedIngredients,
        calories: data.data.calories
      });
      console.log('Data successfully retrieved from server. ',data.data.analyzedInstructions);
    })
    .catch((err) => {
      console.log('ERROR=== ', err);
    });
  }

  getRecipes (path, param, e) {
    this.setState({
        recipes:[],
    });

    e.preventDefault();
    axios.get(path, {params: param})
    .then(({data}) =>  {
      console.log(data);
      if (data.nutrients !== undefined) {
        this.setState({
          nutrients: data.nutrients
        })
      }
      this.setState({
        recipes: (data.results !== undefined) ? data.results :
        (data.meals !== undefined) ? data.meals :
        (data.items !== undefined) ? data.items : data,
      });
      console.log('Data successfully retrieved from server. ',this.state.recipes);
    })
    .catch((err) => {
      console.log('ERROR=== ', err.response.data);
    });
  }

  getZipcodeData (path, param, e) {
    e.preventDefault();
    axios.get(path, {params: param})
    .then(({data}) => {
      console.log('what are the fav cuisines', data);
      //depends if there is a table with that zipcode in db
        //if not then return some sort of message
      //also check structure of data
      if (data.zipcodeData !== undefined) {
        this.setState({
          zipcodeData: data.zipcodeData
        })
        //now the favorite cuisines info is ready to be passed to the popup modal to show to user as a pie chart
      }
    })
    .catch((err) => {
      console.log('error...could not get top favs by zip', err.response.data)
    });
  }

   setToZip (e) {
    e.preventDefault();
    this.setState({
        view: 'zip'
    });
    console.log('is zip showing', this.state.view)
  }

  openZipModal() {
    if (this.state.view === 'zip') {
      console.log('show the zip fav')
      return (
        <ZipPieChart data={this.state.zipcodeData}/>
        )
    }
  }

  updateZipcode (event) {
    const previousZipcode = this.state.zipcode;

    this.setState({
      zipcode: event.target.value
    })
  }

  render () {
    return (
    <ResponsiveContainer demoTest={this.state.data}>
      <Divider section />
      <Segment style={{ padding: '2em'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row >
          <Grid.Column >
            <SearchApiForm className="call-to-action"
              getRecipes={this.getRecipes}
              openModal = {this.open}
              openMeal = {this.openMeal}
              getZipcodeData={this.getZipcodeData}
              updateZipcode={this.updateZipcode}
              setToZip={this.setToZip}/>
            <RecipesList recipes={this.state.recipes} open={this.state.open} openDetails={this.openDetails} close={this.close} getRecipe={this.getRecipe} />
            <RecipeDetails calories={this.state.calories} recipe={this.state.recipeSteps} ingredients={this.state.recipeIngredients} image={this.state.image} open={this.state.openDetails} close={this.closeDetails}/>
            <MealView recipes = {this.state.recipes} open={this.state.openMeal} close={this.closeMeal} getRecipe={this.getRecipe} openDetails={this.openDetails}/>
             <div className="openZipModal">
              {this.openZipModal()}
            </div>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Healthier, Informed, Affordable meal prep.
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Some Description....
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Easy to use on the go!...
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              paragraph description...
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button  color="green" href='#'size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us (We can maybe put a comment stream here)</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Fake user comment here."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Nan</b> Fake user name and picture
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            List of Features
          </Header>
          <p style={{ fontSize: '1.33em' }}>
          - Allergens <br />
          - Recipes <br />
          - Prices <br />
          Short description...
          </p>
          <Button color="green" href='#' as='a' size='large'>
            Read More
          </Button>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button color="green" href='#' as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item href='#' as='a'>Sitemap</List.Item>
                  <List.Item href='#' as='a'>Contact Us</List.Item>
                  <List.Item href='#' as='a'>Team hours</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item href='#' as='a'>Feature List</List.Item>
                  <List.Item href='#' as='a'>Membership</List.Item>
                  <List.Item href='#' as='a'>Renown recipes</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
    )
  }
}
export default HomepageLayout;
