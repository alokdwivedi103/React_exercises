import React, { useState } from "react";
import { validateFormData } from './utils'
import "./Form.css";

const defaultForm = {
  loginId: "",
  email: "",
  name: "",
  timezone: "",
  homePage: "",
  aboutMe: "",
  receiveNotifications: false
}
const defaultObj = {}

const Form = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState(defaultObj);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
    } else {
      setFormData(defaultForm);
      setErrors(defaultObj);
    }
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
          <select id="Timezone" name="timezone" value={formData.timezone}
            onChange={handleChange}>
            <option value="" disabled selected>
              Select a timezone
            </option>
            <option value="GMT">
              GMT
            </option>
            <option value="IST">
              IST
            </option>
            <option value="DST">
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
              onChange={handleChange}
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
