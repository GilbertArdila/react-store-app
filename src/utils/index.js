/**
 * this function will return the total price of the items
 * @param {Array} items 
 * @returns {number}
 */
export const totalPrice = (items) => {
    let sum = 0;
    items.forEach(item => 
        sum += item.total

    );

    return sum;
}