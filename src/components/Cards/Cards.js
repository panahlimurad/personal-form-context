import React from "react";
import styles from "./cardsContainer.module.css";
import { UsetodoContext } from "../Provider/TodoProvider";

const Cards = () => {

  const { todoList } = UsetodoContext()
  

  return (
    <>
      {todoList.map((todo, index) => (
        <div key={index} className={styles.card}>
          <img src={todo.profileImage} alt="personal"></img>
          <div className={styles.infoPersonal}>
            <h3>{todo.firstName}</h3>
            <p>{todo.email}</p>
            <p>{todo.lastName}</p>
            <p>{todo.biography}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
