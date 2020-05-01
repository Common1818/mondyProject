import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const HomeVideoModal = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="home-vid-play" onClick={handleShow}>
        <i className="fa fa-play"></i>
      </button>

      <Modal show={show} centered size="xl" onHide={handleClose}>
        <iframe
          title="Home Video"
          className="home-video-modal"
          src={data && data.thumbnailUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default HomeVideoModal;
