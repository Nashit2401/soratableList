import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <Box
      sx={{
        bgcolor: "blue",
        width: "30vw",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" color={"white"}>
        {task.task || ""}
        {/* GO EAT FOOD */}
      </Typography>
      <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
        <IconButton
          onClick={() => {
            deleteTodo(task.id);
          }}
          size="large"
          sx={{ color: "red" }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            editTodo(task.id);
          }}
          size="large"
          sx={{ color: "white" }}
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo;
