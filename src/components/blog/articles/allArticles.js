import React from "react";
import { NavLink } from "react-router-dom";

const AllArticles = ({ content }) => {
  const newContent = content && content.slice(1);

  return (
    <section className="grid__col-3">
      {newContent &&
        newContent.map((data) => {
          const ArticleId = data && data.id;
          return (
            <div className="grid__item-md" key={ArticleId}>
              <NavLink to={"/blog/article/" + ArticleId + "/read"}>
                <img
                  alt=""
                  src={data && data.thumbnail}
                  className="grid__item__img"
                />
                <p className="grid__item__category">
                  {" "}
                  {data && data.timestamp.toDate().toDateString()}
                </p>
                <h4 className="grid__item__title">{data && data.heading}</h4>
                <p className="grid__item__author">
                  {" "}
                  By {data && data.authorName}
                </p>
              </NavLink>
            </div>
          );
        })}
    </section>
  );
};

export default AllArticles;
