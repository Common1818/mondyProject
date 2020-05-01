import React from "react";
import { NavLink } from "react-router-dom";

const LatestArticle = ({ content }) => {
  const data = content && content[0];
  const timeAdded = data && data.timestamp.toDate().toDateString();
  const ArticleId = data && data.id;
  return (
    <div className="grid__item-lg">
      <NavLink to={"/blog/article/" + ArticleId + "/read"}>
        <img alt="" src={data && data.thumbnail} className="grid__item__img" />
        <p className="grid__item__category">{timeAdded}</p>
        <h4 className="grid__item__title">{data && data.heading}</h4>
        <p className="grid__item__author">By {data && data.authorName}</p>
      </NavLink>
    </div>
  );
};

export default LatestArticle;
