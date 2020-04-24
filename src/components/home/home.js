import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import HomeVideo from "./HomeVideo";
import JoiningSlide from "./JoinSlide";
import "./css/home.css";
import UspSlide from "./UspSlide";
import { HomeContext } from "../../contexts/homeContext";
import { AdminContext } from "../../contexts/adminContext";
const Home = () => {
  const { adminData } = useContext(AdminContext);
  const { content } = useContext(HomeContext);
  console.log(content.content);
  console.log(adminData);

  return (
    <div className="home-content">
      {adminData.isAdmin ? (
        <a href="/edit/homepage">
          <Button variant="primary" size="lg" block>
            Edit homepage
          </Button>
        </a>
      ) : null}

      <div className="course-preview ">
        <div className="course-preview-heading">
          Master new faster skills faster than ever
          <div className="course-preview-heading2">
            Choose from many fast-paced short courses
          </div>
        </div>

        <div className="home-video">
          <HomeVideo content={content.content} />
        </div>
        <div>
          <UspSlide content={content.content} />
        </div>
        <div className="join-slide">
          <JoiningSlide content={content.content} />
        </div>
      </div>
    </div>
  );
};

export default Home;
