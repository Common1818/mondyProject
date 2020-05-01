import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { HomeContext } from "../../contexts/homeContext";
import { AuthContext } from "../../contexts/authContext";

import Preloader from "../../Preloader/Preloader";
import HomeVideo from "./HomeVideo";
import JoiningSlide from "./JoinSlide";
import UspSlide from "./UspSlide";

import "./css/home.css";

const Home = () => {
  const { isAdmin } = useContext(AuthContext);
  const { content } = useContext(HomeContext);

  return (
  <div>

    <Helmet>
      <meta name="robots" content="index follow" />
    </Helmet>

      {content.isReady ? (
        <div className="home-content">
          {isAdmin ? (
            <a href="/edit/homepage" rel="nofollow">
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
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Home;
