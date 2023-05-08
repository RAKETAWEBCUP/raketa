import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    token: "",
    id: "",
    role: ""
}

const current_userSlice = createSlice({
    name: "current_user",
    initialState: initialState,
    reducers:{
        logger: (state, action) => {
            const newState = {
                token: action.payload.token,
                id: action.payload.id,
                role: action.payload.role
            }
            return state = newState
        }
    }
})

export const setCurrentUser = (token, link) => async (dispatch) => {
    try {
        await axios.get(`http://localhost:8080/${link}`, {headers: {Authorization: token}})
        .then((result) => {
            console.log(result.data.user)
            dispatch(logger({
                id: result.data.user.user._id,
                token: token,
                role: result.data.user.user.role}))
        })
    } catch (error) {
        console.log(error)
    }
}

export const {logger} =current_userSlice.actions;
export default current_userSlice.reducer