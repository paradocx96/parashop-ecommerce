import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const mainReducer = combineReducers({
    items: cartReducer,
    products: productReducer
});

export default mainReducer;
