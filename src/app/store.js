// Designing the store

import {configureStore} from "@reduxjs/toolkit";
import QuizReducer from "../features/Quiz/QuizSlice.jsx";

export const store = configureStore({
    reducer : QuizReducer,
});