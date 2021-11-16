import React from "react"
import TaskDetails from "./TaskDetails"
import { useState } from "react"

function TaskList({ task, title }) {
  const [buttonPopup, setButtonPopup] = useState(false)
  console.log(buttonPopup)
  return (
    <div
      className="task-container"
      onClick={(e) => {
        setButtonPopup(!buttonPopup)
      }}
    >
      <p>Task - {task}</p>
      <p>Title - {title}</p>
      <TaskDetails trigger={buttonPopup} task={task} title={title} />
    </div>
  )
}

export default TaskList
