import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    fruits:[]
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            const fruit = action.payload;
            const addFruit = state.fruits.find((item:any) => item.id === fruit.id)

            if (addFruit) {
                addFruit.quantity += 1
            } else {
                state.fruits.push({ ...fruit, quantity: 1})
            }
        },
        plusFruit:(state,action) => {
            const fruitId = action.payload;
            const fruit = state.fruits.find((fruit:any) => fruit.id === fruitId)
            if (fruit) {
                fruit.quantity += 1
            }
        },
        minusFruit:(state,action) => {
            const fruitId= action.payload;
            const fruit = state.fruits.find((fruit:any) => fruit.id === fruitId)
            if (fruit) {
                fruit.quantity -= 1
            }
            if (fruit.quantity <= 0){
                state.fruits = state.fruits.filter((fruit:any) => fruit.id !== action.payload)
            }
        },
        deleteFruit:(state,action) => {
            state.fruits = state.fruits.filter((fruit:any) => fruit.id !== action.payload)
        },
        clearCart:(state) => {
            state.fruits = []
        },
    }
})

export const {addToCart,plusFruit,minusFruit,deleteFruit,clearCart} = CartSlice.actions
export default CartSlice.reducer