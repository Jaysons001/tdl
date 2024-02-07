import { Box } from "@chakra-ui/react";
import React from "react";

const Showtask = ({ task, deleteTask, index, checkTask, done }) => {
  console.log(done, task);

  return (
    <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
      <Box
        display={"flex"}
        textAlign={"left"}
        onClick={() => checkTask(index)}
        w={"100%"}
        style={{ cursor: "pointer" }}>
        <p style={{ marginRight: "10px" }}>{index + 1}.</p>
        <p style={{ textDecoration: done ? "line-through" : "none" }}>{task.split("||")[0]}</p>
      </Box>
      <button onClick={() => deleteTask(index)}>x</button>
    </Box>
  );
};

export default Showtask;
