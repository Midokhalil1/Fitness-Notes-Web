
// import React from 'react';
// import { Divider, List, Typography } from 'antd';
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
// const App = () => (
//   <>
//     <Divider orientation="left">Default Size</Divider>
//     <List
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => (
//         <List.Item>
//           <Typography.Text mark>[ITEM]</Typography.Text> {item}
//         </List.Item>
//       )}
//     />
//     <Divider orientation="left">Small Size</Divider>
//     <List
//       size="small"
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => <List.Item>{item}</List.Item>}
//     />
//     <Divider orientation="left">Large Size</Divider>
//     <List
//       size="large"
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => <List.Item>{item}</List.Item>}
//     />
//   </>
// );
// export default App;






import { useState } from "react"

export default function AddPost({setNotes}) {
    const [form, setForm] = useState({})
  
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
      .then((data) => setNotes(data))

    }
  
    const handleForm = e => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    console.log(form)
  
    return (
      <ul className='notes-container'>
        <h1>Add Note</h1>
        <form className='form' action='submit' onSubmit={submitPost}>
          <label htmlFor=''>runs</label>
          <input name='runs' type='text' onChange={handleForm} />
          <br />
          <label htmlFor=''>cycling</label>
          <input name='cycling' type='text' onChange={handleForm} />
          <br />
          <label htmlFor=''>gym</label>
          <input name='gym' type='text' onChange={handleForm} />
          <br />
          <label htmlFor=''>Date</label>
          <input name='date' type='date' onChange={handleForm} />
          <br />
          <button type='submit' onClick={submitPost}>
            Submit
          </button>
        </form>
      </ul>
    )
  }

    

//     <form>
//       <input  type="text" className="addnotes-input" />
//       <button className="addnotes-button" type="submit">
//         <i className="fas fa-plus-square"></i>
//       </button>
//       <div className="select">
//         <select name="addnotes" className="filter-notes">
//           <option value="all">ALL</option>
//           <option value="completed">Completed</option>
//           <option value="uncompleted">Uncompleted</option>
//         </select>
//       </div>
//     </form>
//   );
// }

// export default function addNotes () {

//     const [run, setRun] = useState ('')
//     const [cycle, setCycle] = useState ('')
//     const [swim, setSwim] = useState ('')
//     const [walk, setWalk] = useState ('')
//     const [gym, setGym] = useState ('')
//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }
// }

// const addNotes = { run, cycle, swim, walk, gym}
// fetch('https://my-fitness-notes-frontend.web.app/Notes',{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(addNotes)
// })
// .then()
// .catch(alert)
