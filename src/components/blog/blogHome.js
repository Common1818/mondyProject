import React, { useContext } from "react";
import "./css/blogHome.css";
import LatestArticle from "./articles/latestArticle";
import FeaturedArticles from "./articles/featuredArticles";
import NewsletterForm from "./newsletterForm";
import AllArticles from "./articles/allArticles";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BlogContext } from "../../contexts/blogContext";
import { AdminContext } from "../../contexts/adminContext";

const BlogHome = () => {
  const { adminData } = useContext(AdminContext);
  const { content } = useContext(BlogContext);
  return (
    <div className="blog-container">
      <nav className="nav__top">
        <a href="#" className="nav__top__link"></a>
      </nav>
      {adminData.isAdmin ? (
        <NavLink to="/blog/article/add">
          <Button variant="primary" size="lg" block>
            Add Article
          </Button>
        </NavLink>
      ) : null}
      <div className="title">
        <h1 className="title__h1">
          {" "}
          Khola Academy <span>Blog</span>
        </h1>
        <p className="title__sub">For a better tomorrow</p>
      </div>
      <article className="grid">
        <section className="grid__col-2">
          <LatestArticle content={content.content} />
          <div>
            <h3 className="grid__col__title">Featured Articles</h3>
            <FeaturedArticles content={content.content} />
            <NewsletterForm />
          </div>
        </section>
        <h3 className="grid__col__title">Also Read...</h3>
        <AllArticles content={content.content} />
      </article>
    </div>
  );
};

export default BlogHome;
