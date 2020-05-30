import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style/style.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
