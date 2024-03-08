import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        darkmode : true
    },
    reducers: {
        changerMode: (state) => {
            state.darkmode = !state.darkmode
        }
    }
})

export const { changerMode } = darkmodeSlice.actions
export default darkmodeSlice.reducer