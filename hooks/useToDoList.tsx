import { useState } from "react";

type item = { text: string; completed: boolean; id: string };

const useToDoList = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const initialize = (items: Omit<item, "id">[]) => {
    let newList: item[] = [];

    items.map((item, i) => {
      newList.push({ ...item, id: (i + 1).toString() });
    });

    setTodos(newList);
  };

  const addItem = (text: string) => {
    let newId =
      todos.length !== 0
        ? (parseInt(todos[todos.length - 1].id) + 1).toString()
        : "1";

    let copyTodos = [
      ...todos,
      {
        text: text,
        completed: false,
        id: newId,
      },
    ];
    setTodos(copyTodos);
  };

  const updateItem = (id: string, item: Omit<item, "id">) => {
    let itemIndex = todos.findIndex((item) => {
      return item.id === id;
    });
    if (itemIndex >= 0) {
      let todosCopy = [...todos];
      todosCopy.splice(itemIndex, 1, { ...item, id: id });
      setTodos(todosCopy);
    }
  };

  const removeItem = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const toggleCompleted = (id: string) => {
    let itemIndex = todos.findIndex((item) => {
      return item.id === id;
    });
    if (itemIndex >= 0) {
      let todosCopy = [...todos];
      todosCopy.splice(itemIndex, 1, {
        ...todos[itemIndex],
        completed: !todos[itemIndex].completed,
      });
      setTodos(todosCopy);
    }
  };

  return {
    todos,
    initialize,
    addItem,
    updateItem,
    removeItem,
    toggleCompleted,
  };
};

export default useToDoList;
