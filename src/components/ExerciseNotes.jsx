import { useEffect, useState } from "react";
export default function ExerciseNotes() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/notes`)
      .then((results) => results.json())
      .then((data) => setNotes(data))
      .catch(alert);
  }, [setNotes]);
  return (
    <div className="home">
      <div className="Notes">
        {notes && notes.map((note) => <p key={note._id}>{note.runs}{note.gym}{note.cycling}</p>)}
      </div>
    </div>
  );
}
