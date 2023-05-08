import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        getUsers : (state, action) => {
            state = action.payload
            return state
            },
        addUser: (state, action) => {
            state.push(action.payload)
        },  
        deleteUser : (state, action) => {
            state = state.filter((user) => user._id !== action.payload)
            return state
        },
        updateUser : () => {}
    }
});

export const getUsersAsync = () => async (dispatch) => {
    try {
        console.log("GetUsers")
        const response = await axios.get("http://localhost:8080/user")
        dispatch(getUsers(response.data.user))
    } catch (error) { 
        console.log(error)
    }
}
export const deleteUserAsync = (id) => async (dispatch) => {
    console.log(id)
    try {
        const respone = await axios.delete(`http://localhost:8080/user/${id}`)
        dispatch(deleteUser(respone.data.user._id))
    } catch (error) {
        console.log(error)
    }
}
export const addUserAsync = (user) => async (dispatch) => {
    try {
        const respone = await axios.post(`http://localhost:8080/user`,user)
        dispatch(addUser(respone.data))
    } catch (error) {
        console.log(error)
    }
}

export const { getUsers, addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;