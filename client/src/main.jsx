import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { ThemeProvider } from "@mui/material";
import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
const queryClient = new QueryClient();


const root = createRoot(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
   
    <Provider store={store}>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FF871C',
            borderRadius: 6,
          },
        }}
      >
      <PersistGate loading={null} persistor={persistor}>
        <PayPalScriptProvider
          options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
        >
          <App />
        </PayPalScriptProvider>
      </PersistGate>
      </ConfigProvider>
    </Provider>
 
  </QueryClientProvider>
);

