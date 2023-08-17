import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState([])

    const addTodo = (newTodoList) => {
        setTodoList([...todoList, newTodoList]);
    }

      const todoContextValue = {
        todoList,
        addTodo,
      };

    return <TodoContext.Provider value={todoContextValue}>{children}</TodoContext.Provider>;
};

// custom HOOK
export const UsetodoContext = () => useContext(TodoContext)


export default TodoProvider