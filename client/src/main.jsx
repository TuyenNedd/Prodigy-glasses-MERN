<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ThemeProvider } from "@material-tailwind/react";
>>>>>>> 7ece123559cd857a473924660d2575195294f1d5

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
  <Provider store={store}>
    <App />
  </Provider>

  </React.StrictMode>,
)
=======
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
>>>>>>> 7ece123559cd857a473924660d2575195294f1d5
