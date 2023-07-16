import './index.css';
import './assets/styles/Cart.css'
import './assets/styles/Product.css'
import './assets/styles/Navigation.css'
import './assets/styles/Carousel.css'
import './assets/styles/Footer.css'
import './assets/styles/ScrollBar.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from 'react';
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {persistedStore, store} from "./state/Store";
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
