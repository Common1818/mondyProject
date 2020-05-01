/* eslint-disable */
import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FooterContext } from "../../../contexts/footerContext";
import { updateFooterFunction } from "../../crudFunctions/footerFunctions";

const EditFooterAddress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstLine, setFirstLine] = useState();
  const [secondLine, setSecondLine] = useState();

  const { content, dispatch } = useContext(FooterContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateFooterFunction(
      { firstLine, secondLine },
      dispatch,
      "Address",
      "Footer"
    );
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
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                defaultValue={data && data[1].firstLine}
                onChange={(e) => {
                  setFirstLine(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                defaultValue={data && data[1].secondLine}
                onChange={(e) => {
                  setSecondLine(e.target.value);
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

export default EditFooterAddress;
