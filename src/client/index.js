//Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.INITIAL_STATE || {},
  applyMiddleware(thunk)
);

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
