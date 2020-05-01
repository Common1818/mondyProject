import * as React from "react";
import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CourseContext } from "../../../contexts/courseContext";
import { updateCourseFunction } from "../../crudFunctions/coursesFunctions";

const EditCourseTopic = (props) => {
  const { dispatch } = useContext(CourseContext);

  const topicId = props.topic.id;

  const [show, setShow] = useState(false);
  const [topicName, setTopicName] = useState("");
  const handleClose = () => setShow(false);
  const handleShowEditTopic = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCourseFunction({ topicName }, dispatch, topicId, "Topics");
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
        onClick={handleShowEditTopic}
      ></i>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        autoFocus={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Update Topic</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setTopicName(e.target.value);
                }}
                type="text"
                defaultValue={props.topic.topicName}
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

export default EditCourseTopic;
