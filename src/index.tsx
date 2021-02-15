import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./tiles/store/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { ready } from "./tiles/store/actions";
// add dummy Store for now...
function todos(state = [], action: any) {
  switch (action.types) {
    default:
      return state;
  }
}
const store = createStore(rootReducer, composeWithDevTools());
store.dispatch(ready());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
