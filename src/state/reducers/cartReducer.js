import {
    ADD_TO_CART,
    CLEAR_CART,
    DECREMENT_ITEM_QUANTITY,
    INCREMENT_ITEM_QUANTITY,
    REMOVE_ITEM,
    UPDATE_ITEM_QUANTITY
} from '../actions/cartActionTypes';

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case UPDATE_ITEM_QUANTITY:
            const {itemId, quantity} = action.payload;
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === itemId ? {...item, quantity: quantity} : item
                ),
            };

        case INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: item.quantity + 1} : item
                ),
            };

        case DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: item.quantity - 1} : item
                ),
            };

        case CLEAR_CART:
            return {
                ...state,
                items: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
