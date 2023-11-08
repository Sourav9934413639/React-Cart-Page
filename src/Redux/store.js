import { configureStore } from "@reduxjs/toolkit/dist";
import {cartReducer} from './cartReducer'
const store=configureStore({
    reducer:{
        cartReducer
    }
})
export default store;