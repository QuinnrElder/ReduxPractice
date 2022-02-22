import React from "react";

//REDUX
import { useDispatch } from "react-redux";
import { DELETE_TODO, TOGGLE_COMPLETED, FAVORITE_TODO } from "../../Redux/actions";

//MUI
import {
	Checkbox,
	FormControlLabel,
	ListItem,
	FormGroup,
	Typography,
	ListItemSecondaryAction,
	IconButton,
} from "@material-ui/core";
import { Delete, Star, StarOutline } from "@material-ui/icons";

//THIS.COMPONENT
export function TodoItems({ id, title, completed, important }) {
	const dispatch = useDispatch();
	const toggleCheckbox = () => {
		dispatch({
			type: TOGGLE_COMPLETED,
			payload: {
				id: id,
			},
		});
	};

	const handleDeletClick = () => {
		dispatch({
			type: DELETE_TODO,
			payload: {
				id:id
			}
		})
	}
	
	const handleFavClick = () => {
		dispatch({
			type: FAVORITE_TODO,
			payload: {
				id:id
			}
		})
	}

	return (
		<ListItem dense>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={completed}
							onChange={() => toggleCheckbox()}
							name={title}
							color={"primary"}
						/>
					}
					label={
						<Typography
							style={{
								textDecoration: completed && "line-through",
							}}
						>
							{title}
						</Typography>
					}
				></FormControlLabel>
			</FormGroup>
			<ListItemSecondaryAction>
				<IconButton  edge="end" onClick={() => handleFavClick()}>
					{important ? <Star/> : <StarOutline/>}
				</IconButton>
				<IconButton onClick={() => handleDeletClick()}>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
