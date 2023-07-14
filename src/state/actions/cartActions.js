import {
    ADD_TO_CART,
    CLEAR_CART,
    DECREMENT_ITEM_QUANTITY,
    INCREMENT_ITEM_QUANTITY,
    REMOVE_ITEM,
    UPDATE_ITEM_QUANTITY
} from './cartActionTypes';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        payload: itemId,
    };
};

export const updateItemQuantity = (itemId, quantity) => {
    return {
        type: UPDATE_ITEM_QUANTITY,
        payload: {itemId, quantity},
    };
};

export const incrementItemQuantity = (itemId) => {
    return {
        type: INCREMENT_ITEM_QUANTITY,
        payload: itemId,
    }
}

export const decrementItemQuantity = (itemId) => {
    return {
        type: DECREMENT_ITEM_QUANTITY,
        payload: itemId,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
