import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    userData:{}
}

const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers: {
        saveUserData: (state,payload) => {
            state.userData = payload.payload
        }
    }
})
export const { saveUserData } = authReducer.actions

export default  authReducer.reducer
