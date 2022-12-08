import { useState} from "react"
import { Modal, Form, Input, Button, Upload } from "antd"



export default function AddPost({setNotes}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const [form, setForm] = useState({})
    const [updated, setUpdated] = useState(false)
  
    const submitPost = e => {
      e.preventDefault()
 
      fetch(`${process.env.REACT_APP_ENDPOINT}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      .then((results) => results.json())
      .then((data) => {
        setUpdated(!updated)
        setNotes(data)
      })

    }
  
    const handleForm = e => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    console.log(form)
  
    return (

      <div>
    
      <button className='plusbutton' type="primary" onClick={showModal}>
      
        +
      </button>
      <div/>
      
      <Modal    open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h1>Add Note</h1>
        <form className='notes-container' action='submit' onSubmit={submitPost}>
          <label htmlFor=''>Runs</label>
          <input name='runs' type='text' onChange={handleForm} />
          <br />
          <br />
          <label  htmlFor=''>Cycling</label>
          <input  name='cycling' type='text' onChange={handleForm} />
          <br />
          <br />
          <label htmlFor=''>Gym</label>
          <input name='gym' type='text' onChange={handleForm} />
          <br />
          <br />
          <label htmlFor=''>Date</label>
          <input name='date' type='date' onChange={handleForm} />
          <br />
          <br />
          <button type='submit' onClick={submitPost}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};
      // <ul className='notes-container'>
      //   <h1>Add Note</h1>
      //   <form className='form' action='submit' onSubmit={submitPost}>
      //     <label htmlFor=''>Runs</label>
      //     <input name='runs' type='text' onChange={handleForm} />
      //     <br />
      //     <label htmlFor=''>Cycling</label>
      //     <input name='cycling' type='text' onChange={handleForm} />
      //     <br />
      //     <label htmlFor=''>Gym</label>
      //     <input name='gym' type='text' onChange={handleForm} />
      //     <br />
      //     <label htmlFor=''>Date</label>
      //     <input name='date' type='date' onChange={handleForm} />
      //     <br />
      //     <button type='submit' onClick={submitPost}>
      //       Submit
      //     </button>
      //   </form>
      // </ul>
    
  
