import React, { useState } from "react";

//REDUX
import { useDispatch } from "react-redux";

//MUI
import { Box, TextField, Button } from "@material-ui/core";

//ACTIONS
import {ADD_TODO} from "../../Redux/actions"

//THIS.COMPONENT
export function AddTodo() {
	const [title, setTitle] = useState("");

  const addTodoItem = () => {
    //useDispatch
    //ADD_TODO
  }

	return (
		<Box>
			<TextField
				style={{ width: "400" }}
				value={title}
				label="Add a new todo"
				varient="filled"
				onChange={(event) => setTitle(event.target.value)}
			/>

			<Button
        variant="contained"
        color="primary"
        onClick={() => addTodoItem()}
        >
				Add
			</Button>
		</Box>
	);
}
