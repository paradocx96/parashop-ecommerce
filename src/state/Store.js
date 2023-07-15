import {applyMiddleware, createStore} from 'redux'
import mainReducer from "./reducers/mainReducer";
import thunk from "redux-thunk";
import {getAllProducts} from "./actions/productActions";
import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";


const persistConfiguration = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfiguration, mainReducer)

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const persistedStore = persistStore(store);

store.dispatch(getAllProducts());

export {store, persistedStore};
