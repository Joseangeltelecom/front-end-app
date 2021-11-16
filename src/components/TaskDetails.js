import React from "react"
import axios from "axios"
import "./taskDetails.css"

function TaskDetails({ title, task, trigger }) {
  const handleComplete = () => {
    axios.put(`http://localhost:4000/tasks`).then((res) => {
      console.log(res.data)
    })
  }

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>Task - {task}</p>
        <p className="title">Title - {title}</p>
        <button className="complete-btn" onClick={handleComplete}>
          complete
        </button>
        <button className="close-btn">close</button>
      </div>
    </div>
  ) : (
    ""
  )
}

export default TaskDetails
