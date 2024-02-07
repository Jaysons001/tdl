import { Box, Checkbox } from "@chakra-ui/react";
import React from "react";

const Showtask = ({ task, deleteTask, index, checkTask, done }) => {
  console.log(done, task);

  return (
    <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
      <Checkbox colorScheme="green" isChecked={done} onChange={() => checkTask(index)}>
        <p style={{ textDecoration: done ? "line-through" : "none" }}>{task.split("||")[0]}</p>
      </Checkbox>
      <button onClick={() => deleteTask(index)}>x</button>
    </Box>
  );
};

export default Showtask;
