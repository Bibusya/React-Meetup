import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Meetups/NewMeetupForm";

const NewMeetup = () => {
  let navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetups-82c93-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
