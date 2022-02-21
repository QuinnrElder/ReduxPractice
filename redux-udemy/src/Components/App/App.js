import React from "react";
import "./App.css";

//COMPONENTS
import {AddTodo} from '../AddTodo/AddTodo'
import {TodosContainer} from "../TodosContainer/TodosContainer"

//MUI
import { makeStyles, Paper } from "@material-ui/core";
import {
	Box,
	AppBar,
	IconButton,
	Toolbar,
	Typography,
  Container,
} from "@material-ui/core";

//STYLES
const useStyles = makeStyles((theme) => ({
	root: {
    margin: 0,
  },
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper: {
    textAlign: 'center',
    width: '100%',
  }
}));

//THIS.APP
function App() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit">
						<img
							src="IMG_0011.jpeg"
							alt="Photo of Quinn"
							style={{ width: "60px" }}
						/>
					</IconButton>
					<Typography variant="h1">Todos</Typography>
				</Toolbar>
			</AppBar>

      <Container className={classes.appContainer}>
        <Paper elevation={0} className={classes.wrapper}>
          {/* Add the TODO */}
          <AddTodo/>
          {/* Display TODOs */}
					<TodosContainer/>
        </Paper>
      </Container>
		</Box>
	);
}

export default App;
