import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addTodo(text);
    setText("");
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
    >
      <Typography variant="h2">List</Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        <TextField
          value={text}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter your task here!"
          sx={{
            width: "20vw",
            backgroundColor: "white",
            color: "black",
            fontStyle: "bold",
          }}
        />
        <Button
          sx={{ backgroundColor: "Blue", color: "white", width: "5vw" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default TodoForm;
