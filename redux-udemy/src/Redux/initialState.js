export const initialState = JSON.parse(window.localStorage.getItem("todo-list")) || {
  todos: [
    {
    id: 0,
    title: "Buy Milk",
    completed: false,
    important: false,
  },
    {
    id: 1,
    title: "Clean Room",
    completed: false,
    important: true,
  },
  {
    id: 2,
    title: "Food Prep",
    completed: true,
    important: true,
  },
],
}
