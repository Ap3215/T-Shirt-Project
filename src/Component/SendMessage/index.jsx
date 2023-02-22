import React, { useState } from "react";

import { useForm } from "react-hook-form";

import classes from "./index.module.css";

const SendMessage = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    site: "",
    message: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const submitFormHandler = (e) => {
    console.log(e);
    reset();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    console.log(state);
  };

  return (
    <div className={classes["message"]}>
      <form onSubmit={handleSubmit(submitFormHandler)}>
        <div className={classes["message__name"]}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChangeHandler}
            {...register("name", {
              required: "This Filed is required",
              minLength: {
                value: 3,
                message: "*Username atleast 3 character*",
              },
              maxLength: {
                value: 10,
                message: "*Username not more than 10 character",
              },
              pattern: {
                value: /^([^0-9@&.#,+=$%]*)$/,
                message: "*Number or Special character are not Allowed",
              },
            })}
            autoComplete="off"
          />
          {errors.name && (
            <small className={classes["message__name--error"]}>
              {errors.name.message}
            </small>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
            {...register("email", {
              required: "This Filed is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "*Please Enter a valid Email",
              },
            })}
          />
          {errors.email && (
            <small className={classes["message__name--error"]}>
              {errors.email.message}
            </small>
          )}
        </div>

        <div className={classes["message__site"]}>
          <input
            type="text"
            name="site"
            placeholder="Your Site"
            onChange={onChangeHandler}
            {...register("site", {
              required: "This Filed is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "*Please Enter a valid Email",
              },
            })}
          />
          {errors.site && (
            <small className={classes["message__name--error"]}>
              {errors.site.message}
            </small>
          )}
        </div>
        <div className={classes["message__textarea"]}>
          <textarea
            name="message"
            id=""
            cols="10"
            rows="5"
            placeholder="Message"
            onChange={onChangeHandler}
            {...register("message", {
              required: "This Filed is required",
              minLength: {
                value: 3,
                message: "*Username atleast 3 character*",
              },
              maxLength: {
                value: 200,
                message: "*Username not more than 10 character",
              },
            })}
          ></textarea>
          {errors.message && (
            <small className={classes["message__name--error"]}>
              {errors.message.message}
            </small>
          )}
        </div>
        <button className={classes["message__button"]} type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
