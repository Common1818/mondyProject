import React, { useContext, useState } from "react";
import { BlogContext } from "../../../contexts/blogContext";
import { NavLink } from "react-router-dom";
import "./css/readArticle.css";
import "./css/quill.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Row, Col, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { deleteArticleFunction } from "../../crudFunctions/blogFunctions";
import { AdminContext } from "../../../contexts/adminContext";

const ReadArticle = (props) => {
  const { content, dispatch } = useContext(BlogContext);
  const ArticleId = props.match.params.id;
  const data = content.content;
  const url = window.location.href;
  const [copied, setCopied] = useState(false);
  const { adminData } = useContext(AdminContext);
  console.log(props);
  console.log(content);
  console.log(ArticleId);
  console.log(data);
  const handleDelete = () => {
    deleteArticleFunction(ArticleId, dispatch);
  };

  var status;
  if (useContext(BlogContext).content.errCode === 100) {
    status = { text: "Error Deleting article", class: "text-danger" };
  }
  if (useContext(BlogContext).content.errCode === 200) {
    status = { text: "Article Deleted Successfully", class: "text-success" };
  } else {
    status = null;
  }

  console.log(props.match.params.id);
  return (
    <div>
      <div className="blog-article-container">
        {data &&
          data.map((article) => {
            if (article.id === ArticleId) {
              return (
                <Row key={ArticleId} className="full-view-article p-2">
                  <div className="share-icons">
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        copied ? (
                          <Tooltip id={"tooltip-right"}>
                            Link Copied to ClipBoard
                          </Tooltip>
                        ) : (
                          <Tooltip id={"tooltip-right"}>
                            Copy link to clipboard
                          </Tooltip>
                        )
                      }
                    >
                      <div id="link" className="link-icon">
                        <CopyToClipboard
                          text={url}
                          onCopy={() => setCopied({ copied: true })}
                        >
                          <i className="fas fa-link"></i>
                        </CopyToClipboard>
                      </div>
                    </OverlayTrigger>
                    <div></div>

                    <br />
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id={"tooltip-right"}>Share via mail</Tooltip>
                      }
                    >
                      <div className="mail-icon">
                        <a
                          className="mail-icon"
                          href={`mailto:?Subject=${
                            "Article on " + article.heading
                          }&Body=Hey look i just found out this Amazing article on "${
                            article.heading
                          }",Check it out : ${url}`}
                          target="_top"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </OverlayTrigger>
                    <br />
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id={"tooltip-right"}>
                          Share on WhatsApp
                        </Tooltip>
                      }
                    >
                      <div>
                        <a
                          className="whatsapp-icon"
                          href={`https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on "${article.heading}",Check it out : ${url}`}
                          target="_blank"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </div>
                    </OverlayTrigger>
                  </div>

                  <Col sm={2}></Col>

                  <Col id="top" sm={8}>
                    <div>
                      <br />
                      <div className="ql-snow">
                        <div
                          className=" ql-editor full-article"
                          dangerouslySetInnerHTML={{
                            __html: article.content,
                          }}
                        ></div>
                      </div>

                      {adminData.isAdmin ? (
                        <div className="up-del-buttons">
                          <NavLink
                            to={"/blog/article/" + ArticleId + "/update"}
                          >
                            <Button
                              variant="outline-success"
                              className="update-button"
                              type="link"
                            >
                              Update
                            </Button>
                          </NavLink>
                          <Button
                            className="delete-button"
                            variant="outline-danger"
                            onClick={handleDelete}
                          >
                            Delete
                          </Button>
                          <div className={status && status.class}>
                            {status && status.text}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <a href="#">
                      <i
                        id="go-to-top"
                        className=" top-icon fas fa-angle-double-up"
                      ></i>
                    </a>
                  </Col>

                  <Col sm={2}></Col>
                </Row>
              );
            }
          })}
      </div>
    </div>
  );
};

export default ReadArticle;
