import React, { useReducer } from "react";
import "./formSection.module.css";
import { reducer } from "../helper/reduce";
import { UsetodoContext } from "../Provider/TodoProvider";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  biography: "",
  profileImage: "",
};

const FormSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const {addTodo} = UsetodoContext()


  const changeInput = (e) => {
    
    const { name, value } = e.target;
    
    dispatch({ type: `CHANGE_${name.toUpperCase()}`, payload: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
   
      if (
        state.firstName === "" ||
        state.lastName === "" ||
        state.email === "" ||
        state.biography === "" ||
        state.profileImage === ""
      ) {
        return;
    }
    
      addTodo(state);
      dispatch({ type: "CHANGE_FIRST_NAME", payload: "" });
      dispatch({ type: "CHANGE_LAST_NAME", payload: "" });
      dispatch({ type: "CHANGE_EMAIL", payload: "" });
      dispatch({ type: "CHANGE_BIOGRAPHY", payload: "" });
      dispatch({ type: "CHANGE_PROFILE_IMAGE", payload: "" });
    console.log(state);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="first_Name"
          onChange={changeInput}
          value={state.firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_Name"
          onChange={changeInput}
          value={state.lastName}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          onChange={changeInput}
          value={state.email}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="biography"
          onChange={changeInput}
          value={state.biography}
          placeholder="Biography"
        />
        <input
          type="url"
          name="profile_Image"
          onChange={changeInput}
          value={state.profileImage}
          placeholder="Profile Image"
        />
      </form>
      <button onClick={handleOnSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};

export default FormSection;
