import { useEffect } from "react";
import { Checkbox } from "antd";
import { useNavigate, useParams } from "react-router-dom";
// tell React that your component needs to do something after render
import { Card } from "antd";
import { DeleteOutlined, EditOutlined  } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { Overlay } from "antd/es/popconfirm/PurePanel";

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
  const navigate = useNavigate();
  const { id } = useParams();

  function deleteNotes(id) {
    fetch(`${process.env.REACT_APP_ENDPOINT}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        fetch(`${process.env.REACT_APP_ENDPOINT}/notes`)
          .then((response) => response.json())
          .then((data) => {
            setNotes(data);
            navigate("/notes");
          });
      })
      .catch((err) => {
        alert(err);
      });
  }
  function updateNote(e, id) {
    fetch(`${process.env.REACT_APP_ENDPOINT}/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: e.target.checked }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
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
                padding: 3,
              }}
              actions={[
                // <PlusOutlined key="add" />,
                <EditOutlined    key="edit" />,
                <DeleteOutlined 
                hoverable
                  
                  key="delete"
         
                  onClick={() => deleteNotes(note._id)}
                />,
              ]}
            >
              <section>
                <Checkbox
                  onChange={(e) => updateNote(e, note._id)}
                  checked={note?.complete}
                >
                  Complete {" "}
                </Checkbox>
                <p className="day-color">DAY: {note.day}</p>{" "}
                <p className="day-color">DATE: {note.date}</p>
                
                <br />
                <p>RUN: {note.runs}</p>
                <p>CYCLE: {note.cycle}</p>
                <p>SWIM: {note.swim}</p>
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


