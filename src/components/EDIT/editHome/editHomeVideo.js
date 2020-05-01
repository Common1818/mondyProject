import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import "./css/editHomeVideo.css";
import { EditHomeVideoFunction } from "../../crudFunctions/homePageFunctions";
import { HomeContext } from "../../../contexts/homeContext";

const EditHomeVideo = ({ content }) => {
  const [EditHomeVideo, setEditHomeVIdeo] = useState([
    { thumbnailUrl: "" },
    { heading: "", text: "" },
    { heading: "", text: "" },
    { heading: "", text: "" },
    { videoUrl: "" },
  ]);

  const data = content && content[3].EditHomeVideo;

  const { dispatch } = useContext(HomeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    EditHomeVideoFunction({ EditHomeVideo }, dispatch);
  };
  var status;
  if (useContext(HomeContext).content.errorCode === 100) {
    status = { text: "Error updating ", class: "text-danger" };
  }
  if (useContext(HomeContext).content.errorCode === 200) {
    status = { text: "Updated Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <div className="container bg-light">
      <Form onSubmit={handleSubmit}>
        <div>
          <h3 className="edit-top-carousel">Edit Home Video</h3>
        </div>
        <Row>
          <Col>
            <Form.Control
              required="true"
              type="text"
              className="video-thumbnail"
              placeholder="Enter Thumbnail Url Here"
              defaultValue={data && data[0].thumbnailUrl}
              onChange={(e) => {
                const index = 0;
                const newArr = [...EditHomeVideo];
                newArr[index] = { thumbnailUrl: e.target.value };
                setEditHomeVIdeo([...newArr]);
              }}
            />
            <Form.Control
              required="true"
              type="text"
              className="video-thumbnail"
              placeholder="Enter Video Url Here"
              onChange={(e) => {
                const index = 4;
                const newArr = [...EditHomeVideo];
                newArr[index] = { thumbnailUrl: e.target.value };
                setEditHomeVIdeo([...newArr]);
              }}
            />
          </Col>

          <Col>
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings text-primary"
                defaultValue={data && data[1].heading}
                placeholder="Enter Heading Here"
                onChange={(e) => {
                  const index = 1;
                  const newArr = [...EditHomeVideo];
                  newArr[index] = { heading: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />
              <Form.Control
                required="true"
                type="text"
                defaultValue={data && data[1].text}
                className="edit-home-vid-content "
                as="textarea"
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 1;
                  const newArr = [...EditHomeVideo];
                  const heading = newArr[index].heading;
                  newArr[index] = { heading: heading, text: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />
            </div>
            <br />
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings text-primary"
                defaultValue={data && data[2].heading}
                placeholder="Enter Heading here"
                onChange={(e) => {
                  const index = 2;
                  const newArr = [...EditHomeVideo];
                  newArr[index] = { heading: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />

              <Form.Control
                required="true"
                type="text"
                defaultValue={data && data[2].text}
                className="edit-home-vid-content"
                as="textarea"
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 2;
                  const newArr = [...EditHomeVideo];
                  const heading = newArr[index].heading;
                  newArr[index] = { heading: heading, text: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />
            </div>
            <br />
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings text-primary"
                placeholder="Enter Heading here"
                defaultValue={data && data[3].heading}
                onChange={(e) => {
                  const index = 3;
                  const newArr = [...EditHomeVideo];
                  newArr[index] = { heading: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />

              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-content"
                defaultValue={data && data[3].text}
                as="textarea"
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 3;
                  const newArr = [...EditHomeVideo];
                  const heading = newArr[index].heading;
                  newArr[index] = { heading: heading, text: e.target.value };
                  setEditHomeVIdeo([...newArr]);
                }}
              />
            </div>
          </Col>
        </Row>
        <br />
        <div className="edit-top-carousel-btn">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <div className={status && status.class}>{status && status.text}</div>
        </div>
      </Form>
    </div>
  );
};

export default EditHomeVideo;
