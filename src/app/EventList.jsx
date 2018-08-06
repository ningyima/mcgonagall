import React from 'react';
import EventListItem from './EventListItem.jsx';

const EventList = props =>
  <div style={{marginLeft: '-1em'}}>
    <h4 className="margin-bottom-10">
      There are {props.events.length} events
    </h4>
    <ul style={{listStyleType: 'none', paddingLeft: 0}}>
      {props.events.map(event =>
        <EventListItem
          key={event.id}
          event={event}
        />
      )}
    </ul>
  </div>;

export default EventList;