import React from "react";
import "./Review.scss";
import { useFormik } from "formik";
import pic from "../../assets/ReviewPic1.jpg"
import { reviewSchema } from "../../schema";

const initialValues = {
  name: "",
  email: "",
  comment: "",
};

const Review = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: reviewSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  // console.log(errors);

  return (
    <div className="review">
      <div className="review_left">
        <form className="review_left_form" onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Share your experience about WeatherHub.</p>
          <div className="review_left_form_inputFields">
            <div className="review_left_form_inputFields_nameInput">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="name"
                autoComplete="off"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
              {errors.name && touched.name ? (<p className="validation">{errors.name}</p>) : null}
            <div className="review_left_form_inputFields_emailInput">
              <label htmlFor="email">Enter Your Email</label>
              <input
                // type="email"
                autoComplete="off"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
              {errors.email && touched.email ? (<p className="validation">{errors.email}</p>):null}
            <div className="review_left_form_inputFields_commentInput">
              <label htmlFor="comment">Leave Your Comment(s)</label>
              <textarea
                name="comment"
                id="comment"
                autoComplete="off"
                placeholder="Comment"
                cols="30"
                rows="10"
                value={values.comment}
                onChange={handleChange}
              />
            </div>
              {errors.comment && touched.comment ? (<p className="validation">{errors.comment}</p>):null}
          </div>
          <div className="review_left_form_submission">
            <p>Thanks for your review!</p>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="review_right">
        <img src={pic} alt="loading..." />
      </div>
    </div>
  );
};

export default Review;
