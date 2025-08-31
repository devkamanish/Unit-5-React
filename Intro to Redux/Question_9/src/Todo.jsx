import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions"
import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  Checkbox,
  IconButton,
  Heading,
} from "@chakra-ui/react";

// import { DeleteIcon } from "@chakra-ui/icons";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <Box p={5} maxW="500px" mx="auto">
      <Heading mb={4}>Redux Todo App</Heading>
      <Box display="flex" mb={4}>
        <Input
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          mr={2}
        />
        <Button colorScheme="teal" onClick={handleAdd}>
          Add
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bg="gray.100"
            p={2}
            borderRadius="md"
          >
            <Checkbox
              isChecked={todo.status}
              onChange={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.title}
            </Checkbox>
            <IconButton
              colorScheme="red"
              icon={<DeleteIcon />}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoApp;
