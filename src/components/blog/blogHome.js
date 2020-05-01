/* eslint-disable */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { BlogContext } from "../../contexts/blogContext";
import { AuthContext } from "../../contexts/authContext";

import LatestArticle from "./articles/latestArticle";
import FeaturedArticles from "./articles/featuredArticles";
import AllArticles from "./articles/allArticles";

import "./css/blogHome.css";


const BlogHome = () => {

  const { isAdmin } = useContext(AuthContext);
  const { content } = useContext(BlogContext);
  
  let descriptionString = "";

  content.content && content.content.map(item=>{
    descriptionString = descriptionString.concat((item.heading).toString());
    return descriptionString
  })

  return content.content ? (
    <div className="blog-container">

      <Helmet>
        <title>Marketing Acad Blog</title>
        <meta name="description" content = {"Marketing Acad Blog" + descriptionString} />
      </Helmet>

      <nav className="nav__top">
        <a rel="nofollow" href="#" className="nav__top__link"></a>
      </nav>
      {isAdmin ? (
        <NavLink to="/blog/article/add" rel="nofollow">
          <Button variant="primary" size="lg" block>
            Add Article
          </Button>
        </NavLink>
      ) : null}
      <div className="title">
        <h1 style={{ fontFamily: "Dosis" }} className="title__h1">
          {" "}
          Marketing Acad <span>Blog</span>
        </h1>
        <p className="title__sub">For a better tomorrow</p>
      </div>
      <article className="grid">
        <section className="grid__col-2">
          <LatestArticle content={content.content} />
          <div>
            <h3 className="grid__col__title">Featured Articles</h3>
            <FeaturedArticles content={content.content} />
            {/* <NewsletterForm /> */}
          </div>
        </section>
        <h3 className="grid__col__title">Also Read...</h3>
        <AllArticles content={content.content} />
      </article>
    </div>
  ):null
};

export default BlogHome;
