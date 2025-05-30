import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.price += newItem.price
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);
            if (findItem) {
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.products = state.products.filter(item => item.id !== id)
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);
            if (findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalPrice += findItem.price;
                state.totalQuantity++;
            }


        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);
            if (findItem.quantity > 0) {
                if (findItem) {
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price;
                    state.totalPrice -= findItem.price;
                    state.totalQuantity--;
                }
            }
        }
    }
})
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;