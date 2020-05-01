import React, { useContext, useState } from "react";
// import { Image } from "react-bootstrap";
import "./css/editJoinSlide.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { EditStatSlideFunction } from "../../crudFunctions/homePageFunctions";
import { HomeContext } from "../../../contexts/homeContext";

const EditJoinSlide = ({ content }) => {
  const [EditJoinSide, setEditJoinSlide] = useState([
    { stat: "", text: "" },
    { stat: "", text: "" },
    { stat: "", text: "" },
  ]);

  const { dispatch } = useContext(HomeContext);
  const data = content && content[1].EditJoinSide;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(EditJoinSide);
    EditStatSlideFunction({ EditJoinSide }, dispatch);
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
    <div className="edit-join-container bg-light">
      <Form onSubmit={handleSubmit}>
        <div>
          <h2 className="edit-stat">Edit Stats Page</h2>
        </div>
        <div className="edit-stat">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <div className={status && status.class}>{status && status.text}</div>
        </div>
        <Row className="stat-numbers">
          <Col>
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings"
                defaultValue={data && data[0].stat}
                onChange={(e) => {
                  const index = 0;
                  const newArr = [...EditJoinSide];
                  newArr[index].stat = e.target.value;
                  setEditJoinSlide([...newArr]);
                }}
              />

              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-content"
                as="textarea"
                defaultValue={data && data[0].text}
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 0;
                  const newArr = [...EditJoinSide];
                  newArr[index].text = e.target.value;
                  setEditJoinSlide([...newArr]);
                }}
              />
            </div>
          </Col>
          <Col>
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings"
                defaultValue={data && data[1].stat}
                onChange={(e) => {
                  const index = 1;
                  const newArr = [...EditJoinSide];
                  newArr[index] = { stat: e.target.value };
                  setEditJoinSlide([...newArr]);
                }}
              />

              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-content"
                defaultValue={data && data[1].text}
                as="textarea"
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 1;
                  const newArr = [...EditJoinSide];
                  const stat = newArr[index].stat;
                  newArr[index] = { stat: stat, text: e.target.value };
                  setEditJoinSlide([...newArr]);
                }}
              />
            </div>
          </Col>
          <Col>
            <div>
              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-headings"
                defaultValue={data && data[2].stat}
                onChange={(e) => {
                  const index = 2;
                  const newArr = [...EditJoinSide];
                  newArr[index] = { stat: e.target.value };
                  setEditJoinSlide([...newArr]);
                }}
              />

              <Form.Control
                required="true"
                type="text"
                className="edit-home-vid-content"
                defaultValue={data && data[2].text}
                as="textarea"
                rows="3"
                placeholder="Enter content here"
                onChange={(e) => {
                  const index = 2;
                  const newArr = [...EditJoinSide];
                  const stat = newArr[index].stat;
                  newArr[index] = { stat: stat, text: e.target.value };
                  setEditJoinSlide([...newArr]);
                }}
              />
            </div>
          </Col>
        </Row>
      </Form>
      <br />

      <br />
    </div>
  );
};

export default EditJoinSlide;

// <div className="">
//   <div className="join-heading">
//     <h3 className="">Join thousands of international students</h3>
//   </div>

//   <div className="stats">
//     <div className="data">
//       <div>
//         <h3 className="number text-primary">2000+</h3>
//       </div>
//       <div>enrolled students</div>
//     </div>

//     <div className="data">
//       <div>
//         <h3 className="number text-primary">10+</h3>
//       </div>
//       <div>student nationalities</div>
//     </div>

//     <div className="data">
//       <div>
//         <h3 className="number text-primary">96%</h3>
//       </div>
//       <div>satisfied students</div>
//     </div>
//   </div>
//   <div className=" join-btn">
//     <a href="/" className="btn btn-primary float-left" type="button">
//       Join Now
//     </a>
//   </div>
// </div>
