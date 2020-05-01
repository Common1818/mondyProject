/* eslint-disable */
import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FooterContext } from "../../../contexts/footerContext";
import { updateFooterFunction } from "../../crudFunctions/footerFunctions";

const EditFooterNumber = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Phone, setPhone] = useState();

  const { content, dispatch } = useContext(FooterContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateFooterFunction({ Phone }, dispatch, "Phone", "Footer");
  };

  const data = content.content;

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
          <Modal.Title>Edit Phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                defaultValue={data && data[2].Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
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

export default EditFooterNumber;
