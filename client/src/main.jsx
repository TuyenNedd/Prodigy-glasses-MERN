import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider } from "@mui/material";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <ThemeProvider> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PayPalScriptProvider
          options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
        >
          <Router>
            <App />
          </Router>
        </PayPalScriptProvider>
      </PersistGate>
    </Provider>
    {/* </ThemeProvider> */}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);
