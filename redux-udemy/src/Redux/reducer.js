import { initialState } from "./initialState";

//ACTIONS
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, FAVORITE_TODO } from "../Redux/actions";

//ID GENERATOR
import shortid from "shortid";

//REDUCER
function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			const { title } = action.payload;
			const newState = {
				...state,
				todos: [
					...state.todos,
					{ title: title, id: shortid(), completed: false, important: false },
				],
			};
			return newState;
		}
		case TOGGLE_COMPLETED: {
			const { id } = action.payload;
			const newTodos = state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			const newState = {
				...state,
				todos: newTodos,
			};
			return newState;
		}
		case DELETE_TODO: {
			const { id } = action.payload;
			const newTodos = state.todos.filter((todo) => todo.id !== id)
			const newState = {
				...state,
				todos: newTodos,
			};
			return newState;
		}
		case FAVORITE_TODO: {
			const { id } = action.payload;
			const newTodos = state.todos.map((todo) => {
				if(todo.id === id) {
					todo.important = !todo.important;
				}
				return todo
			})
			const newState = {
				...state,
				todos: newTodos,
			};
			return newState;
		}
		default:
			return state;
	}
}

export default reducer;
