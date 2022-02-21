import React from "react";

//MUI
import { Box, Divider, Grid, Typography } from "@material-ui/core";
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
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography align="left" variant="h5" gutterBottom>My TODOs</Typography>
          <Divider></Divider>
				</Grid>
			</Grid>
		</Box>
	);
}
