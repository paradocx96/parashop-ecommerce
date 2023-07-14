import React from 'react';
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./state/Store";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
