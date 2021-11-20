import React from "react";
import MeetupItem from "./MeetupItem";
import { v4 as uuidv4 } from "uuid";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <div className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={uuidv4()}
          id={uuidv4()}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
};

export default MeetupList;
