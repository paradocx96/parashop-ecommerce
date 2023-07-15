export const cartSelector = ({items}) => {
    return items
}

export const cartItemsCountSelector = ({items}) => {
    return items.items.reduce((count, item) => count + item.quantity, 0)
}

export const cartTotalSelector = ({items}) => {
    const total = items.items.reduce((total, item) => total + item.quantity * item.price, 0)
    return total.toFixed(2)
}
