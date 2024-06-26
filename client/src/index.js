import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Nothing from "./components/my";
import store, { persistor } from "./redux/store"; // Import both store and persistor
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <Nothing />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
