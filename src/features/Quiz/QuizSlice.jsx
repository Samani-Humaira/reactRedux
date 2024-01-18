//reducer
import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const initialState = {
    QuizQuestion : [{id:nanoid() , Question : "Which sports are you interested in the most?" , Answer : ["Soccer" , "Basketball" , "Bjj","MMA"] , ExtraQues : "What is your name:"},
    {id:nanoid()  , Question : "What is react?" , Answer : ["A programming Lang" , "A library" , "A framework" ,"A tag "] , ExtraQues : "What is your qualification:"},
    {id:nanoid()  , Question : "What is js?" , Answer : ["A programming Lang" , "A library" , "A framework" ,"A tag "] , ExtraQues : "What is your passion:"},
    {id:nanoid()  , Question : "What is HTLM?" , Answer : ["A tag" , "A programming Lang" , "A framework" , "A library"] , ExtraQues : "Where do you live:"},
]}

export const QuizSlice = createSlice({
    name: "QuizQuestion",
    initialState,
    reducers : {
        addQuiz : (state) => {
            state.QuizQuestion
        } , 
        deleteQuiz : (state , action ) =>{
          state.QuizQuestion = state.QuizQuestion.filter((Quiz) => Quiz.id !=action.payload)
        }
    }
});

export const { addQuiz , deleteQuiz } = QuizSlice.actions;
export default QuizSlice.reducer;