import React, { useState, useRef } from "react";

//REDUX
import { useDispatch } from "react-redux";

//MUI
import { Box, TextField, Button } from "@material-ui/core";

//ACTIONS
import {ADD_TODO} from "../../Redux/actions"

//THIS.COMPONENT
export function AddTodo() {
	const [title, setTitle] = useState("");
	const titleFieldRef = useRef(null)
	const dispatch = useDispatch()

  const addTodoItem = () => {
		if(!title) return
    dispatch({
			type: ADD_TODO,
			payload: {
				title: title,
			}
		})
		setTitle(null)
		titleFieldRef.current.value = ""
  }

	return (
		<Box>
			<TextField
				style={{ width: "400" }}
				value={title}
				label="Add a new todo"
				varient="filled"
				onChange={(event) => setTitle(event.target.value)}
				inputRef={titleFieldRef}
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
