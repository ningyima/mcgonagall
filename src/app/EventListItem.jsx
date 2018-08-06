import React from 'react';

const EventListItem = props =>
  <div>
    <li>
      <div className="avatar-wrapper">
        <img width="150" src={props.event.image_url} />
      </div>
      <div className="business-details">
        <div>
          <span className="business-detail-text">
            {props.event.title}
          </span>
          <div className="clear-fix" />
        </div>
        <div className="media-title">
          <a className="subtle-text" href={props.event.url} target="_blank">
            {props.event.name}
          </a>
        </div>
        <div className="clear-fix" />
        <div>
          <span className="media-title">Category:</span>
          <span className="business-detail-text">
            {props.event.category}
          </span>
          <div className="clear-fix" />
        </div>
        <div>
          <span className="media-title">Rating:</span>
          <span className="business-detail-text">
            {props.event.rating}
          </span>
          <div className="clear-fix" />
        </div>
        <div>
          <span className="media-title">Price:</span>
          <span className="business-detail-text">
            {props.event.price}
          </span>
          <div className="clear-fix" />
        </div>
        <div>
          <span className="media-title">Address:</span>
          <span className="business-detail-text">
            {props.event.address}
          </span>
          <div className="clear-fix" />
        </div>
        <div>
          <span className="media-title">Phone:</span>
          <span className="business-detail-text">
            {props.event.phone}
          </span>
          <div className="clear-fix" />
        </div>
        <div>
          <button
            className="margin-right-10"
            onClick={() => {
              props.saveHandler(props.event);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              props.deleteHandler(props.event);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="clear-fix" />
    </li>
  </div>;

export default EventListItem;
