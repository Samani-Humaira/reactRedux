import { useState } from "react"

export default function QuizShow({questionData}){
    const [input , setInput ] = useState("");

    function SubmitHandler(e){
        e.preventDefault();
    }

    function handleChange(e){
        setInput(e.target.value);
    }
    
    return(
        <div >
            
            <p><b>{questionData.Question}</b></p>

           <form onSubmit={SubmitHandler}>
           {questionData.Answer.map((answer,index) =>(
          
             <label key={index}>
             <input
               type="radio"
               name="answer"
               value={answer}
             />
             {answer}
           </label>
           ))}
          <br></br>
          <br></br>
          
           <label  htmlFor="ExtrQues">{questionData.ExtraQues} </label> <br></br>
           <input placeholder="Enter Answer" style={{width:"100%"}} type="text" id="ExtrQues" value={input} onChange={handleChange} />
         
           </form>
          
        </div>
    )
}