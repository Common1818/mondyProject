import React, { useState, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { CourseContext } from "../../contexts/courseContext";
import { addCourseTopic } from "../crudFunctions/coursesFunctions";

const AddTopic = (props) => {
  const [topicName, setTopicName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShowAddTopic = () => setShow(true);
  const { dispatch } = useContext(CourseContext);

  const courseId = props.id;

  const handleSubmit = (e) => {
    e.preventDefault();

    addCourseTopic(courseId, { topicName }, dispatch);
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
        onClick={handleShowAddTopic}
      >
        AddTopic
      </i>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        autoFocus={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Topic Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Topic Name</Form.Label>
              <Form.Control
                onChange={(e) => setTopicName(e.target.value)}
                required
                type="text"
              />
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Add Topic
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

export default AddTopic;
