import React, { useState, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { addCourseVideo } from "../crudFunctions/coursesFunctions";
import { CourseContext } from "../../contexts/courseContext";

const AddVideo = (props) => {
  const { dispatch } = useContext(CourseContext);

  const courseId = props.courseId;
  const topicId = props.topicId;

  const [videoName, setVideoName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShowAddVideo = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    addCourseVideo(
      courseId,
      topicId,
      "Videos",
      { videoName, videoDescription, videoUrl },
      dispatch
    );

    // updateCourseFunction(
    //     { videoName, videoDescription, videoUrl },
    //     dispatch,
    //     videoId,
    //     "Videos"
    // );
  };

  var status;
  if (useContext(CourseContext).courses.errorCode === 100) {
    status = { text: "Error Adding ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 200) {
    status = { text: "Added Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <>
      <i
        variant="primary"
        className="fas edit-icon fa-plus"
        onClick={handleShowAddVideo}
      ></i>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        autoFocus={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Course Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Update Video Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setVideoName(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Update Video Description </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setVideoDescription(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Update VideoUrl</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setVideoUrl(e.target.value);
                }}
                type="text"
              />
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Add Video
            </Button>
            <div className={status && status.class}>
              {status && status.text}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddVideo;
