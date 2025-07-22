import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import CatalogSlice from './CatalogSlice'

const store = configureStore({
    reducer:{
        cart:CartSlice,
        catalog:CatalogSlice
    }
})

export default store