import React from "react";

const NewsletterForm = () => {
  return (
    <div className="grid__item- form">
      <h4 className="form__title">
        Sign up for our Newsletter and stay Updated...
      </h4>
      <div className="form__fields">
        <input type="email" className="form__input" placeholder="Enter Email" />
        <input type="submit" value="SignUp" className="form__submit" />
      </div>
    </div>
  );
};

export default NewsletterForm;
