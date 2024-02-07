import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Showtask from "./components/Showtask";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  const addTask = () => {
    let task = document.getElementById("task").value;

    if (!task) {
      alert("Enter Task");
      return;
    }
    task = document.getElementById("task").value + "||" + "false";
    setTasks([...tasks, task]);
    document.getElementById("task").value = "";
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const checkTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] =
      newTasks[index].split("||")[0] + "||" + (newTasks[index].split("||")[1] === "true" ? "false" : "true");
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Box bg="black">
      <Box maxW="483px" mx="auto" textAlign="center" color="white" px={"20px"} pb={"20px"} h={"100vh"} py={"20px"}>
        <Heading mb={"20px"}> Simple React To Do List</Heading>
        <Box display={"flex"} justifyContent={"space-between"} mb={"20px"} gap={"10px"}>
          <Input
            placeholder="Enter Task"
            id="task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <Button mx={"auto"} id="add" onClick={addTask}>
            Add
          </Button>
        </Box>
        {tasks &&
          tasks.map((task, index) => (
            <Showtask
              key={index}
              task={task.split("||")[0]}
              index={index}
              deleteTask={deleteTask}
              checkTask={checkTask}
              done={task.split("||")[1] === "true" ? true : false}
            />
          ))}
      </Box>
    </Box>
  );
}

export default App;
