import React from "react";

//COMPONENTS
import{TodoItems} from "../TodoItems/TodoItems"

//REDUX
import { useSelector } from "react-redux";

//MUI
import {
	Box,
	Divider,
	Grid,
	List,
	ListItem,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		margin: 20,
		padding: 20,
		backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
	},
}));

//THIS.COMPONENT
export function TodosContainer() {

	//REDUX STATE
	const todosState = useSelector((state) => {
		return {
			todos: state.todos,
		};
	});

	//STYLES
	const classes = useStyles();

	const prioritizedTodos = (function priorites() {
		const importantTodos = []
		const notImportantTodos = []
	
		todosState.todos.forEach(todo => {
			if(todo.important) {
				importantTodos.push(todo)
			} else {
				notImportantTodos.push(todo)
			}
		})
	
			return importantTodos.concat(notImportantTodos)
	})();

	return (
		<Box className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography align="left" variant="h5" gutterBottom>
						My TODOs
					</Typography>
					<Divider />
					<List>
						{prioritizedTodos.map((todo) => {
							return !todo.completed ? <TodoItems {...todo} /> : null
						})}
					</List>
				</Grid>
				<Grid item xs={6}>
					<Typography align="left" variant="h5" gutterBottom>
						Completed TODOs
					</Typography>
					<Divider />
          <List>
						{prioritizedTodos.map((todo) => {
							return todo.completed ? <TodoItems {...todo} /> : null
						})}
					</List>
				</Grid>
			</Grid>
		</Box>
	);
}
