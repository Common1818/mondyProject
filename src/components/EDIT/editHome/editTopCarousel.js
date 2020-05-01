import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./css/editTopCarousel.css";
import { EditTopCarouselFunction } from "../../crudFunctions/homePageFunctions";
import { HomeContext } from "../../../contexts/homeContext";

const EditTopCarousel = ({ content }) => {
  const [HomeCarouselUrl, setHomeCarouselUrl] = useState([
    { url: "", heading: "", text: "" },
    { url: "", heading: "", text: "" },
    { url: "", heading: "", text: "" },
  ]);

  const { dispatch } = useContext(HomeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    EditTopCarouselFunction({ HomeCarouselUrl }, dispatch);
  };

  const data = content && content[0].HomeCarouselUrl;

  return (
    <div className="container bg-light p-3">
      <Form onSubmit={handleSubmit}>
        <div>
          <h3 className="edit-top-carousel">EditTopCarousel</h3>
        </div>
        <Row>
          <Col>
            <Form.Control
              required="true"
              type="text"
              className="top-carousel-img-url"
              defaultValue={data && data[0].url}
              onChange={(e) => {
                const index = 0;
                const newArr = [...HomeCarouselUrl];
                newArr[index].url = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
              placeholder="Enter Image Url Here"
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              placeholder="Enter label heading Here"
              defaultValue={data && data[0].heading}
              onChange={(e) => {
                const index = 0;
                const newArr = [...HomeCarouselUrl];
                newArr[index].heading = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              placeholder="Enter Subtext Here"
              defaultValue={data && data[0].text}
              onChange={(e) => {
                const index = 0;
                const newArr = [...HomeCarouselUrl];
                newArr[index].text = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              required="true"
              type="text"
              className="top-carousel-img-url"
              defaultValue={data && data[1].url}
              onChange={(e) => {
                const index = 1;
                const newArr = [...HomeCarouselUrl];
                newArr[index].url = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
              placeholder="Enter Image Url Here"
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              defaultValue={data && data[1].heading}
              placeholder="Enter label heading Here"
              onChange={(e) => {
                const index = 1;
                const newArr = [...HomeCarouselUrl];
                newArr[index].heading = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              defaultValue={data && data[1].text}
              onChange={(e) => {
                const index = 1;
                const newArr = [...HomeCarouselUrl];
                newArr[index].text = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
              placeholder="Enter Subtext Here"
            />
          </Col>
          <Col>
            <Form.Control
              required="true"
              type="text"
              className="top-carousel-img-url"
              defaultValue={data && data[2].url}
              onChange={(e) => {
                const index = 2;
                const newArr = [...HomeCarouselUrl];
                newArr[index].url = e.target.value;

                setHomeCarouselUrl([...newArr]);
              }}
              placeholder="Enter Image Url Here"
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              placeholder="Enter label heading Here"
              defaultValue={data && data[2].heading}
              onChange={(e) => {
                const index = 2;
                const newArr = [...HomeCarouselUrl];
                newArr[index].heading = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
            />
            <br />
            <Form.Control
              required="true"
              type="text"
              placeholder="Enter Subtext Here"
              defaultValue={data && data[2].text}
              onChange={(e) => {
                const index = 2;
                const newArr = [...HomeCarouselUrl];
                newArr[index].text = e.target.value;
                setHomeCarouselUrl([...newArr]);
              }}
            />
          </Col>
        </Row>
        <br />
        <div className="edit-top-carousel-btn">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditTopCarousel;
