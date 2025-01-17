import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter as Router } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);
