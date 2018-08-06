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

const Features = () => (
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
);

export default Features;