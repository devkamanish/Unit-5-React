
import {configureStore } from "@reduxjs/toolkit"
import tasksReducer from "../redux/taskSlice"

export const store = configureStore({
    reducer : {
        tasks: tasksReducer
    }
})

