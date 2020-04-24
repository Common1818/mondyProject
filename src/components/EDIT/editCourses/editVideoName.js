import * as React from "react";
import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CourseContext } from "../../../contexts/courseContext";
import { updateCourseFunction } from "../../crudFunctions/coursesFunctions";

const EditVideoTopic = (props) => {
  const { dispatch } = useContext(CourseContext);
  console.log(props);
  //   const topicId = props.topic.id;
  const { video } = props;
  const videoId = video.id;

  console.log(video);

  const [show, setShow] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShowEditVideo = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ videoName, videoDescription, videoUrl });

    updateCourseFunction(
      { videoName, videoDescription, videoUrl },
      dispatch,
      videoId,
      "Videos"
    );
  };
  var status;
  if (useContext(CourseContext).courses.errorCode === 100) {
    status = { text: "Error updating ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 200) {
    status = { text: "Updated Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <>
      <i
        variant="primary"
        className="fas edit-icon fa-edit"
        onClick={handleShowEditVideo}
      ></i>

      <Modal
        centered
        animation
        show={show}
        onHide={handleClose}
        animation={true}
        autoFocus={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Course Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Update Video Name</Form.Label>
              <Form.Control
                defaultValue={video.videoName}
                onChange={(e) => {
                  setVideoName(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Update Video Description </Form.Label>
              <Form.Control
                defaultValue={video.videoDescription}
                onChange={(e) => {
                  setVideoDescription(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Update VideoUrl</Form.Label>
              <Form.Control
                defaultValue={video.videoUrl}
                onChange={(e) => {
                  setVideoUrl(e.target.value);
                }}
                type="text"
              />
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Update
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

export default EditVideoTopic;
