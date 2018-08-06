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
import EventList from './EventList.jsx';
import GMap from './GMap.jsx';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          "_id":"5b662dc37962d11e33281b6d",
          "id":"k-00a2R9zdJTZuLi1z4CAA",
          "title":"Fan of Kebab",
          "name":"Zeugma Kebab",
          "image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/LfkeXT_DmXiMWtAs9H70gQ/o.jpg",
          "url":"https://www.yelp.com/biz/zeugma-kebab-san-jose?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Mediterranean",
          "rating":5,
          "address":"889 S Almaden Ave San Jose, CA 95110",
          "phone":"(408) 940-5080",
          "distance":495.07892081075056,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.320867248548,"longitude":-121.883736342971}
        },
        {
          "_id":"5b4d4b70de381f06ee96d021",
          "id":"p5uqf2ujdisFkjkMDAT9Ow","name":"Sweet Garden",
          "title": "Who do not like deep fried Seafood?",
          "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/CUC8Mew3HP8Yj6Qpgtmfww/o.jpg","url":"https://www.yelp.com/biz/sweet-garden-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Asian Fusion","rating":4.5,"price":"$","address":"39473 Fremont Blvd Fremont, CA 94538","phone":"(510) 771-9518","distance":1046.0377098819436,"notes":"","favorite":true,"interested":false,"__v":0,"coordinates":{"latitude":37.5438591450212,"longitude":-121.981836226954}
        },
        {
          "_id":"5b4d4b70de381f06ee96d02f",
          "id":"w6hgHC7itFtRpvN9Xif5bw",
          "title": "Sushi lovers",
          "name":"Kazuma Sushi","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/32dD-DX-ZhxGYQGQFucWGQ/o.jpg","url":"https://www.yelp.com/biz/kazuma-sushi-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Japanese","rating":4.5,"price":"$$","address":"47986 Warm Springs Blvd Fremont, CA 94539","phone":"(510) 573-0914","distance":8648.314467951395,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.4765776,"longitude":-121.9216436}
        },
        {
          "_id":"5b4d4b77de381f06ee96d040",
          "id":"-aQhbXq_Imncxo5JgHVODw","name":"Veggie Lee",
          "title": "Budi Zen Garden",
          "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/6kiMqfj-DEC1Vv15gbbh_w/o.jpg","url":"https://www.yelp.com/biz/veggie-lee-hayward-2?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Vegan","rating":4.5,"price":"$$","address":"25036 Hesperian Blvd Hayward, CA 94545","phone":"(510) 785-7133","distance":15964.025441075208,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.6442899133877,"longitude":-122.104593899728}
        },
        {
          "_id":"5b63b0e0b5a107f218413630",
          "id":"vh82YTce1_YibwS72QOuVA",
          "name":"EE Home Cooking",
          "title": "I love engineering and I love cooking",  
          "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/AdGHL87fWS5vt_Iscmuxxw/o.jpg","url":"https://www.yelp.com/biz/ee-home-cooking-fremont-2?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4.5,"price":"$$","address":"43689 Mission Blvd Fremont, CA 94539","phone":"(510) 440-8822","distance":6105.255523334416,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.52637,"longitude":-121.91849}
        },
        {
          "_id":"5b63b0e0b5a107f218413632",
          "id":"lL6Z1zD9HSM-1HCURxCDSg",
          "name":"Good Fortune Chinese Restaurant",
          "title": "Why Fengshui?",
          "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/ALXWQQvgcUB2ZDnD2cKMHQ/o.jpg","url":"https://www.yelp.com/biz/good-fortune-chinese-restaurant-newark?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4.5,"price":"$$","address":"39135 Cedar Blvd Newark, CA 94560","phone":"(510) 894-0742","distance":2184.4145656019614,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5231,"longitude":-122.00605}
        },
        {
          "_id":"5b662dc37962d11e33281b65",
          "id":"ZMdteLcR8y2N-oJAd9cmEg",
          "name":"Souvlaki's Greek Skewers",
          "title": "Who does not like Greek food?",
          "image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/ZT-h3Z9ft45qqd91M-toRw/o.jpg",
          "url":"https://www.yelp.com/biz/souvlakis-greek-skewers-san-jose?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Greek","rating":4.5,"price":"$","address":"577 W Alma Ave San Jose, CA 95125","phone":"(408) 289-1452","distance":819.9584342179907,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.3092867427984,"longitude":-121.887104945135}
        }
      ],
      position: {
        lat: 37.5438077,
        lng: -121.9817887 
      } 
    }
  }

  render() {
    console.log(this.state.events);
    return (
      <Segment style={{ paddingBottom: '2em', marginTop: '2em'}} vertical>
        <div className='events'>
          <Header as='h3' style={{ fontSize: '1.5em', marginLeft: '-1em' }}>
            Throw a party with friends based on your favorite recipes
          </Header>
         <Segment vertical>
            {/*<SearchEvent onSearch={this.searchEvent.bind(this)} />*/}
            <div className="ui grid" style={{ fontSize: '1em' }}>
              <div className="eight wide column">
                <EventList 
                  events={this.state.events}
                />
              </div>
              <div className="eight wide column">
                <GMap 
                  position={this.state.position}
                  events={this.state.events} 
                />
              </div>
            </div>
          </Segment>
        </div>
      </Segment>
    );
  }
}

export default Events;