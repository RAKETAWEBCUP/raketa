import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const historySlice = createSlice({
    name: "tab_history_tab",
    initialState: [],
    reducers: {
        addHistory: (state, action) => {
            state.push(action.payload)
        },
        getHistory: (state, action) => {
            state = action.payload
            return state
        },
        deleteHistory : (state, action) => {
            state = state.filter((history) => history._id !== action.payload)
            return state
        },
    }

})

export const getHistoryAsync = () => async (dispatch) => {
    try {
        console.log('xfxgfx')
        const response = await axios.get("http://localhost:8080/prediction/get")
        console.log(response)
        dispatch(getHistory(response.data))
    } catch (error) { 
        console.log(error)
    }
}

export const addHistoryAsync = (history) => async (dispatch) =>{
    try {
        await axios.post('dqdqdqdqdq', {predicat: history})
        .then((response) => {
            dispatch(addHistory(response.data))
        })
    } catch (error) {
    }
}

export const deleteHistoryAsync = (id) => async (dispatch) => {
    try {
        const respone = await axios.delete(`http://localhost:8080/history/${id}`)
        dispatch(deleteHistory(respone.data.history._id))
    } catch (error) {
        console.log(error)
    }
}

export const {addHistory, getHistory, deleteHistory} = historySlice.actions;
export default historySlice.reducer