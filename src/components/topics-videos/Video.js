import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { Card } from "react-bootstrap";
import "./css/video.css";

const video = (props) => {
  const { selectedVideo } = props;

  return (
    <Fragment>
      <div className="selected-video-container">
        <Card style={{ width: "100%" }}>
          <ReactPlayer
            className="selected-video"
            url={selectedVideo.videoUrl}
            playing={false}
            controls={true}
          />
          <Card.Body>
            <Card.Title> {selectedVideo.videoName}</Card.Title>
            <Card.Text as="div">
              <div className="video-description">
                <span>{selectedVideo.videoDescription}</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default video;
