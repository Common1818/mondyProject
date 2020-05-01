import React, { useState, useContext } from "react";
import "./css/editArticle.css";
import { Form, Button } from "react-bootstrap";
import { BlogContext } from "../../../contexts/blogContext";
import { updateArticleFunction } from "../../crudFunctions/blogFunctions";
import Editor from "../../editor/editor";
import { AuthContext } from "../../../contexts/authContext";

const EditArticle = (props) => {
  const { isAdmin } = useContext(AuthContext);
  const ArticleId = props.match.params.id;
  const data = useContext(BlogContext).content.content;
  const { dispatch } = useContext(BlogContext);
  var selectedArticle;
  data &&
    data.map((article) => {
      if (article.id === ArticleId) {
        selectedArticle = article;
      }
      return null;
    });

  const isFeatured = selectedArticle && selectedArticle.featured;
  const handleSubmit = (e) => {
    e.preventDefault();
    updateArticleFunction(
      {
        authorName,
        heading,
        content,
        thumbnail,
        featured,
      },
      dispatch,
      ArticleId
    );
  };
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [featured, setFeatured] = useState(false);
  const handleEditor = (html) => {
    setContent(html);
  };

  var status;
  if (useContext(BlogContext).content.errorCode === 100) {
    status = { text: "Error updating article", class: "text-danger" };
  }
  if (useContext(BlogContext).content.errorCode === 200) {
    status = { text: "Article updated Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return (
    <div>
      {isAdmin ? (
        <div className="edit-article-container bg-light p-4">
          <h2>Edit Article</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Article Heading</Form.Label>
              <Form.Control
                defaultValue={selectedArticle && selectedArticle.heading}
                required
                onChange={(e) => setHeading(e.target.value)}
                type="text"
                placeholder="Heading for Article"
              />
            </Form.Group>
            {isFeatured ? (
              <span className="text-success">Currently Featured !!!</span>
            ) : (
              <span className="text-danger">Not Featured !!!</span>
            )}
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
            <Editor handleEditor={handleEditor} defaultValue="" />
            <br />
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                required
                defaultValue={selectedArticle && selectedArticle.authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                type="text"
                placeholder="Author Name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Thumbnail Image Url</Form.Label>
              <Form.Control
                defaultValue={selectedArticle && selectedArticle.thumbnail}
                required
                onChange={(e) => setThumbnail(e.target.value)}
                type="text"
                placeholder="Thumbanil URL"
              />
            </Form.Group>
            <Button type="submit">Update Article</Button>
          </Form>
          <div className={status && status.class}>{status && status.text}</div>
        </div>
      ) : null}
    </div>
  );
};

export default EditArticle;
