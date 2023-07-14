import {applyMiddleware, createStore} from 'redux'
import mainReducer from "./reducers/mainReducer";
import thunk from "redux-thunk";
import {getAllProducts} from "./actions/productActions";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getAllProducts());

export default store;
