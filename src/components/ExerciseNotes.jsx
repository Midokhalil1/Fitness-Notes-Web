import { useEffect } from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;
export default function ExerciseNotes({ notes, setNotes }) {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/notes`)
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch(alert);
  }, [setNotes]);
  return (
    <div >
      {notes &&
        notes.map((note) => (
          <Card
          className="card"
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
              description={`${note.runs}, ${note.cycling} , ${note.gym} , ${note.date}`}
              
            />
          </Card>
          // <p key={note._id}>
          //   {note.runs}
          //   {note.gym}
          //   {note.cycling}
          // </p>
        ))}
    </div>
  );
}
