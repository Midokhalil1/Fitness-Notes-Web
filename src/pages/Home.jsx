
import { useEffect, useState } from "react";
// import Hero from "../components/Hero";

// Fetching data from the backend 
const Home = () => {
    const [notes, setNotes] = useState(null) // if the response is not OK send NULL 

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes') //fetching 
            const json = await response.json() //passing JSON

            if (response.ok) {
                setNotes(json)   //is the response is ok pass the json
            }

        }
        fetchNotes()

    }, [])

    return (
        <div className="home">
            <div className="notes">
                {notes && notes.map((note) => (
                    <p key={note._id}>{note.title}</p>

                ))}
            </div>



        </div>
    )

}


