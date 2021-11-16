import { useState, useEffect } from "react"
import "./App.css"
import TaskList from "./components/TaskList"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [data, setData] = useState([])
  const [numberOfPost, setNumberOfPost] = useState(3)

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://localhost:4000/tasks?n=${numberOfPost}`
        )
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  if (!data) return <p>No data to show</p>
  return (
    <div className="App">
      {data.map(() => (
        <TaskList task={uuidv4()} title={data} key={uuidv4()} />
      ))}
    </div>
  )
}

export default App
