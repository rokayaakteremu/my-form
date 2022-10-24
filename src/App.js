import React from "react";
import "./styles/styles.css";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="first-name">
            Enter Your First Name:{" "}
            <input
              id="first-name"
              name="first-name"
              type="text"
              {...register("first-name")}
              required
            />
          </label>
          <label htmlFor="last-name">
            Enter Your Last Name:{" "}
            <input
              id="last-name"
              name="address.city"
              type="text"
              {...register("address.city")}
              required
            />
          </label>
          <label htmlFor="email">
            Enter Your Email:{" "}
            <input
              id="email"
              name="email"
              type="email"
              {...register("email")}
              required
            />
          </label>
          <label htmlFor="new-password">
            Create a New Password:{" "}
            <input
              id="new-password"
              name="new-password"
              type="password"
              pattern="[a-z0-5]{8,}"
              {...register("new-password")}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="personal-account">
            <input
              id="personal-account"
              type="radio"
              name="account-type"
              className="inline"
              {...register("account-type")}
            />{" "}
            Personal Account
          </label>
          <label htmlFor="business-account">
            <input
              id="business-account"
              type="radio"
              name="account-type"
              className="inline"
              {...register("account-type")}
            />{" "}
            Business Account
          </label>
          <label htmlFor="terms-and-conditions" name="terms-and-conditions">
            <input
              id="terms-and-conditions"
              type="checkbox"
              required
              name="terms-and-conditions"
              {...register("terms-and-conditions")}
              className="inline"
            />{" "}
            I accept the{" "}
            <a href="https://www.freecodecamp.org/news/terms-of-service/">
              terms and conditions
            </a>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="profile-picture">
            Upload a profile picture:{" "}
            <input
              id="profile-picture"
              type="file"
              name="file"
              {...register("file")}
            />
          </label>
          <label htmlFor="age">
            Input your age (years):{" "}
            <input
              id="age"
              type="number"
              name="age"
              min="13"
              max="120"
              {...register("age")}
            />
          </label>
          <label htmlFor="referrer">
            How did you hear about us?
            <select id="referrer" name="referrer">
              <option value="">(select one)</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">freeCodeCamp YouTube Channel</option>
              <option value="3">freeCodeCamp htmlForum</option>
              <option value="4">Other</option>
            </select>
          </label>
          <label htmlFor="bio">
            Provide a bio:
            <textarea
              id="bio"
              name="bio"
              rows="3"
              cols="30"
              placeholder="I like coding on the beach..."
            ></textarea>
          </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
