import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import { Box, Container } from "@mui/material";
import EditTodo from "../components/EditTodo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

uuidv4();
const Home = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    // Save todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
    // Save todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const editTask = (task, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
    // Save todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTodos = Array.from(todos);
    const [reorderedItem] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(reorderedTodos);
    // Save todos to local storage
    localStorage.setItem("todos", JSON.stringify(reorderedTodos));
  };
  useEffect(() => {
    console.log("Todos:", todos);
  }, [todos]);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#cfe8fc",
          height: "80vh",
          mt: "40px",
          overflow: "scroll",
        }}
      >
        <Droppable droppableId="todos">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              display={"flex"}
              flexDirection={"column"}
              gap={5}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TodoForm addTodo={addTodo} />
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {todo.isEditing ? (
                        <EditTodo editTodo={editTask} task={todo} />
                      ) : (
                        <Todo
                          task={todo}
                          key={index}
                          deleteTodo={deleteTodo}
                          editTodo={editTodo}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
};

export default Home;
