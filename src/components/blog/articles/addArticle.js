import React, { useState, useContext } from "react";
import "./css/addArticle.css";
import { Form, Button } from "react-bootstrap";
import { addArticleFunction } from "../../crudFunctions/blogFunctions";
import { BlogContext } from "../../../contexts/blogContext";
import Editor from "../../editor/editor";
import { AuthContext } from "../../../contexts/authContext";

const AddArticle = () => {
  const { isAdmin } = useContext(AuthContext);
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [featured, setFeatured] = useState(false);
  const { dispatch } = useContext(BlogContext);

  const handleEditor = (html) => {
    setContent(html);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticleFunction(
      { authorName, heading, content, thumbnail, featured },
      dispatch
    );
  };
  var status;
  if (useContext(BlogContext).content.errCode === 100) {
    status = { text: "Error Adding Article", class: "text-danger" };
  }
  if (useContext(BlogContext).content.errCode === 200) {
    status = { text: "Article Added Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <div>
      {isAdmin ? (
        <div className="addArticle-container bg-light">
          <div className="container ">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Article Heading</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setHeading(e.target.value)}
                  type="text"
                  placeholder="Heading for Article"
                />
              </Form.Group>

              <Form.Check
                onChange={(e) => {
                  if (featured === false) {
                    setFeatured(true);
                  }
                  if (featured === true) {
                    setFeatured(false);
                  }
                }}
                type="switch"
                id="custom-switch"
                label="Feature/UnFeature"
              />
              {!featured ? (
                <div className="text-success">Feature</div>
              ) : (
                <div className="text-danger">UnFeature</div>
              )}

              <br />

              {/* <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Article Content</Form.Label>
            <Form.Control
              required
              onChange={(e) => setContent(e.target.value)}
              as="textarea"
              rows="20"
            />
          </Form.Group> */}
              <Editor handleEditor={handleEditor} defaultValue="" />
              <br />
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setAuthorName(e.target.value)}
                  type="text"
                  placeholder="Author Name"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Thumbnail Image Url</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setThumbnail(e.target.value)}
                  type="text"
                  placeholder="Thumbanil URL"
                />
              </Form.Group>

              <Button type="submit">Add Article</Button>
            </Form>
            <div className={status && status.class}>
              {status && status.text}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddArticle;
