import React from "react";
import ReactDOM from "react-dom";

//REDUX
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";

//COMPONENTS
import { App } from "./Components/App/App";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
