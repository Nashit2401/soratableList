import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
const EditTodo = ({ editTodo, task }) => {
  const [text, setText] = useState(task.task);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    editTodo(text, task.id);
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
          placeholder="Update your task here!"
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
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default EditTodo;
