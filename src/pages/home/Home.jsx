import React from "react";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/NewsFeed";
import RightHome from "../../components/home/RightHome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <LeftHome />
      <NewsFeed />
      <RightHome />
    </div>
  );
};

export default Home;
