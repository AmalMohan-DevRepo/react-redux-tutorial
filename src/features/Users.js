import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../Data";


export const userSlice = createSlice({
    name: "users",
    initialState: { value: usersData },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload.id)
        },
        editUser: (state, action) => {
            const findIndexToEdit = state.value.map((user) => user.id).indexOf(action.payload.id)
            state.value[findIndexToEdit] = {
                ...action.payload
            }

        }
    }
})

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;