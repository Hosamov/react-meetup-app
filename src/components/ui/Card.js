import React from 'react';
import classes from './Card.module.css';

//! Note: props.children always hold value of what's between opening and closing
//!       tag (see MeetupItem.js, where Card is wrapping)

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
