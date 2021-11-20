import React from "react";

import AllMeetup from "./components/Pages/AllMeetup";
import NewMeetup from "./components/Pages/NewMeetup";
import Favorites from "./components/Pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
