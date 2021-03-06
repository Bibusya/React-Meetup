import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt="Meetup"></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add To Favorites</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
