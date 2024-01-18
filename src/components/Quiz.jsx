import { useSelector } from "react-redux";
import { useState } from "react";
import QuizShow from "./showQues";
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import {deleteQuiz} from "../features/Quiz/QuizSlice";

export default function Quiz(){
    const Quiz = useSelector((state) => state.QuizQuestion);
    const dispatch = useDispatch();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [deletedQuestion, setDeletedQuestion] = useState(null);
    
function AddQuiz(){
    if (deletedQuestion !== null) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setDeletedQuestion(null);
    } else if (currentQuestionIndex < Quiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    
  }
function deleteQ(id){
    dispatch(deleteQuiz(id));

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentQuestionIndex(0);
    }

    setDeletedQuestion(currentQuestionIndex);

}
    return(
        <>
        <button onClick={AddQuiz}>< AddIcon /></button> 
        <div style={{padding:"12px",border:"2px solid black"}}> 
        {Quiz.slice(0, currentQuestionIndex +1 ).map((question, index) => (
        <span key={index}> 
          <QuizShow questionData={question} /> 
          <br></br>
          <button onClick={() => deleteQ(question.id)} >Delete</button>      
        </span>
      ))}
        </div>
      </>
    )
}