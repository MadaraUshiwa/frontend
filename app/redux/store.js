import { configureStore } from "@reduxjs/toolkit"
import panierSlice from "./features/panierSlice"
import darkmodeSlice from "./features/darkmodeSlice"

export const store = configureStore({
    reducer: {
        panier : panierSlice,
        darkmode : darkmodeSlice
    },
})

export default store