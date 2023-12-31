import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux setup
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//Reducers
import gamesReducer from "./reducers/gamesReducer";
import detailReducer from "./reducers/detailReducer";
//Router
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    details: detailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //Removes unnecessesary error messsages in console.
      serializableCheck: false,
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
