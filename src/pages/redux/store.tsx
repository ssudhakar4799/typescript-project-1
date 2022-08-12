

import { configureStore } from "@reduxjs/toolkit";
import Store from "./slice"

export default configureStore({
    reducer:{
        cart:Store,
        fav:Store
    }
})