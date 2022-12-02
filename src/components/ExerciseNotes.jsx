import { useEffect, useState } from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";



const { Meta } = Card;
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
        {notes &&
          notes.map((note) => (
            <Card
        title={note.title}
        style={{
          width: 300,
        }}
        actions={[
          <PlusOutlined key="add" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}

      >
        <Meta
      
      description={[note.runs, note.cycling, note.gym]}
    />
      </Card>
            // <p key={note._id}>
            //   {note.runs}
            //   {note.gym}
            //   {note.cycling}
            // </p>
          ))}
      </div>
    </div>
  );
}
