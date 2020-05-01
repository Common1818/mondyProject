/* eslint-disable */
import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { updateFooterFunction } from "../../crudFunctions/footerFunctions";
import { FooterContext } from "../../../contexts/footerContext";

const EditFooterAbout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [about, setAbout] = useState();

  const { content, dispatch } = useContext(FooterContext);
  const data = content.content;

  const handleSubmit = (e) => {
    e.preventDefault();

    updateFooterFunction({ about }, dispatch, "About", "Footer");
  };
  var status;
  if (useContext(FooterContext).content.errorCode === 100) {
    status = { text: "Error updating ", class: "text-danger" };
  }
  if (useContext(FooterContext).content.errorCode === 200) {
    status = { text: "Updated Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <>
      <a type="button" onClick={handleShow}>
        <i
          style={{ color: "crimson", fontSize: "1rem" }}
          className="fa fa-edit"
        ></i>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter About Information"
                defaultValue={data && data[0].about}
                onChange={(e) => {
                  setAbout(e.target.value);
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

export default EditFooterAbout;
