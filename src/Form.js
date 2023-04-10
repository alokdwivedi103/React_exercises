import React, { useState, useRef } from "react";
import "./Form.css";
const Form = () => {
  const [formData, setFormData] = useState({
    loginId: "",
    email: "",
    name: "",
    timezone: "",
    homePage: "",
    aboutMe: "",
    receiveNotifications: false
  });
  const selectRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormData({
        loginId: "",
        email: "",
        name: "",
        timezone: "",
        homePage: "",
        aboutMe: "",
        receiveNotifications: false
      });
      setErrors({});
    }
  };
  const validateFormData = (formData) => {
    const errors = {};

    if (!formData.loginId) {
      errors.loginId = "Login ID is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (document.querySelector("select").value === "") {
      errors.timezone = "Timezone is required";
    }
    if (!formData.homePage) {
      errors.homePage = "Home page is required";
    } else if (
      !/^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,20}(:[0-9]{1,5})?(\/.*)?$/.test(
        formData.homePage
      )
    ) {
      errors.homePage = "Invalid URL format";
    }
    if (formData.aboutMe.length > 0 && formData.aboutMe.length < 50) {
      errors.aboutMe = "About Me must be at least 50 characters";
    }
    if (!formData.receiveNotifications) {
      errors.receiveNotifications = "You must accept to receive notifications";
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <h4>Registration form</h4>
        </div>
        <div className="Form_entry">
          <label htmlFor="loginId">Login ID</label>
          <input
            type="text"
            id="loginId"
            name="loginId"
            value={formData.loginId}
            onChange={handleChange}
          />
          
        </div>
        <br />
          {errors.loginId && <span>{errors.loginId}</span>}
        <div className="Form_entry">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          
        </div>
        <br />
          {errors.email && <span>{errors.email}</span>}
        <div className="Form_entry">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          
        </div>
        <br />
          {errors.name && <span>{errors.name}</span>}
        <div className="Form_entry">
          <label htmlFor="timezone">Timezone</label>
          <select id="Timezone">
            <option value="" disabled selected>
              Select a timezone
            </option>
            <option value="GMT" ref={selectRef}>
              GMT
            </option>
            <option value="IST" ref={selectRef}>
              IST
            </option>
            <option value="DST" ref={selectRef}>
              DST
            </option>
          </select>
          
        </div>
        <br />
          {errors.timezone && <span>{errors.timezone}</span>}
        <div className="Form_entry">
          <label htmlFor="homePage">Home Page</label>
          <input
            type="text"
            id="homePage"
            name="homePage"
            value={formData.homePage}
            onChange={handleChange}
          />
          
        </div>
        <br />
          {errors.homePage && <span>{errors.homePage}</span>}
        <div className="Form_entry">
          <label htmlFor="aboutMe">About Me</label>

          <textarea
            id="aboutMe"
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
          />
          
        </div>
        <br />
          {errors.aboutMe && <span>{errors.aboutMe}</span>}
        <div className="checkbox">
          <label htmlFor="receiveNotifications">
            <input
              type="checkbox"
              id="receiveNotifications"
              name="receiveNotifications"
              checked={formData.receiveNotifications}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  receiveNotifications: e.target.checked
                })
              }
            />
            Receive Notifications of comments.
            <br />
            {errors.receiveNotifications && (
              <span>
                {errors.receiveNotifications}
                <br />
              </span>
            )}
            <span>
              You will be sent an email when someone comments on your blog
            </span>
          </label>
          <br />
        </div>
        <p> Your password will be mailed to you.</p>
        <button type="submit">Go</button>
      </form>
    </>
  );
};
export default Form;
