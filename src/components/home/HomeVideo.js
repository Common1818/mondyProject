import React from "react";
import "./css/Home-video.css";
import { Row, Col } from "react-bootstrap";
import HomeVideoModal from "./homeVideoModal";

const HomeVideo = ({ content }) => {
  const data = content && content[3];
  const EditHomeVideo = data && data.EditHomeVideo;
  const Thumbnail = EditHomeVideo && EditHomeVideo[0].thumbnailUrl;
  const dataArr = data && data.EditHomeVideo.slice(1, 4);

  return (
    <div className="">
      <Row className="video-container">
        <Col lg className="cont1">
          <img src={Thumbnail} className="video-thumbnail" alt="" />
          <HomeVideoModal data={data && data.EditHomeVideo[4]} />
        </Col>
        <Col md="auto"></Col>
        <Col lg className="cont2">
          <div>
            <div className="goal">
              <div>
                <i className="fas fa-desktop pc-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="">{dataArr && dataArr[0].heading}</span>
                  <br />
                </strong>
                {dataArr && dataArr[0].text}
              </div>
            </div>
            <div className="goal">
              <div>
                <i className="far fa-clock clock-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="">{dataArr && dataArr[1].heading}</span>
                  <br />
                </strong>
                {dataArr && dataArr[1].text}
              </div>
            </div>
            <div className="goal">
              <div>
                <i className="fas fa-globe-asia globe-icon"></i>
              </div>
              <div>
                <strong>
                  <span className="">{dataArr && dataArr[2].heading}</span>
                  <br />
                </strong>
                {dataArr && dataArr[2].text}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeVideo;
