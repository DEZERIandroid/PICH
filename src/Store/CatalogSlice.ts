import { createSlice } from "@reduxjs/toolkit";
import fruitList from "./fruitlist";

const initialState = {
    fruits:[...fruitList],
    sortField:null,
    sortDirection:"asc"
}



const CatalogSlice = createSlice({
    name:"catalog",
    initialState,
    reducers:{
        sort:(state,action) => {
            const field = action.payload

            if (state.sortField === field) {
                state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'
            } else {
                state.sortField = field
                state.sortDirection = 'asc'
            }

            if (state.sortField === 'name') {
              state.fruits.sort((a, b) =>
                state.sortDirection === 'asc'
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name)
              );
            } else if (state.sortField === 'price') {
                state.fruits.sort((a, b) =>
                  state.sortDirection === 'asc'
                    ? a.price - b.price
                    : b.price - a.price
                );
            }
        }
    }
})

export const {sort} = CatalogSlice.actions
export default CatalogSlice.reducer
