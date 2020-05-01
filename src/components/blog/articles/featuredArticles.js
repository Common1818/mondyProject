import React from "react";
import { NavLink } from "react-router-dom";

const FeaturedArticles = ({ content }) => {
  return (
    <div>
      {content &&
        content.map((data) => {
          if (data && data.featured === true) {
            const ArticleId = data && data.id;
            return (
              <div className="grid__item-sm" key={data && data.id}>
                <NavLink to={"/blog/article/" + ArticleId + "/read"}>
                  <div>
                    <p className="grid__item__category">
                      {data && data.timestamp.toDate().toDateString()}
                    </p>
                    <h4 className="grid__item__title">
                      {data && data.heading}
                    </h4>
                    <br />
                    <br />
                    <p className="grid__item__author">
                      By {data && data.authorName}{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src={data && data.thumbnail}
                      alt=""
                      className="grid__item__img"
                    />
                  </div>
                </NavLink>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default FeaturedArticles;
