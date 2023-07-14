import {FILTER_PRODUCTS, GET_PRODUCTS} from "../actions/productActionTypes";

const initialState = {
    products: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.payload
            return action.payload

        case FILTER_PRODUCTS:
            return action.payload.toLowerCase() === 'all'
                ? state.products
                : state.products.filter((product) => product.category === action.payload)

        default:
            return state
    }
}

export default productReducer;
