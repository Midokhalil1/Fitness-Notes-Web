import { useState } from "react";
import AddNewNotes from "../components/AddNewNotes"
import ExerciseNotes from "../components/ExerciseNotes"

export default function Notes() {
    const [notes, setNotes] = useState(); 
    return (
        <>
        <ExerciseNotes notes={notes} setNotes={setNotes}/>
        <AddNewNotes setNotes={setNotes} />
       
        

        </>
      

    )
}


