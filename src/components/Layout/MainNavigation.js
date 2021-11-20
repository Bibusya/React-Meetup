import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <main>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">React Meetups</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/newmeetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default MainNavigation;
