import { useEffect } from "react";
// tell React that your component needs to do something after render
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";

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
      <div className="logo-container">
        <img src={logo1} alt="" className="logo1" />
      </div>
      <div className="card-container">
      {notes &&
        notes.map((note) => (
          <Card
          hoverable
          className="card"
          key={note._id}
            title={note.title}
            style={{
              width: 300,
            }}
            actions={[
              // <PlusOutlined key="add" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <section>
              <p className="day-color">DAY: {note.day}</p> <p className="day-color">DATE: {note.date}</p>
              <br />
              <p>RUN: {note.runs}</p>
              <p>CYCLE: {note.cycling}</p>
              <p>SWIM: {note.swimming}</p>
              <p>GYM: {note.gym}</p>
             

            </section>




            {/* <Meta
              description={`${note.runs}, ${note.cycling} , ${note.gym} , ${note.date}`}
              
            /> */}
          </Card>
       
        ))}
        </div>
    </div>
  );
}
