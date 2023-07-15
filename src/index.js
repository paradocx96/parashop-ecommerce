import './index.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {persistedStore, store} from "./state/Store";
import {PersistGate} from "redux-persist/integration/react";
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <App/>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
