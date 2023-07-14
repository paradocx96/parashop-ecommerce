import {FILTER_PRODUCTS, GET_PRODUCTS} from "./productActionTypes";
import ProductApi from "../../services/ProductApi";

export const getAllProducts = () => {
    return (dispatch) => {
        ProductApi.getAllProducts()
            .then((res) => {
                dispatch({type: GET_PRODUCTS, payload: res.data})
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const filterProducts = (filter) => {
    return {
        type: FILTER_PRODUCTS,
        payload: filter
    }
}
