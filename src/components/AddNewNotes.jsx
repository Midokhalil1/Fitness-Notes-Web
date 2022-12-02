import react from "react";

export default function addNotes () {

    // const addNotes = () => {

    //     const inputTextHandler = (e) => {
    //         console.log(e.target.value)

return (

    

    <form>
      <input  type="text" className="addnotes-input" />
      <button className="addnotes-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="addnotes" className="filter-notes">
          <option value="all">ALL</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

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
