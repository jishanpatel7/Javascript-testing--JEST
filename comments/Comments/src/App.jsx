import { useState, useEffect } from 'react'

import './App.css'

function App() {
const [data , setData] = useState([])


useEffect(() => {
  fetchData()
}, [])
const url = "https://jsonplaceholder.typicode.com/users"

const fetchData = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => setData(data))
  console.log(data)
}
  return (
    <div className="App">
    {
      data.map(item => <h1>{item.name}</h1>)
    }
    </div>
  )
}

export default App
