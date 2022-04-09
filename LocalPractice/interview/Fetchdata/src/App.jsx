import { useState, useEffect } from 'react'

import './App.css'

export default function App() {
  const [data, setData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = "https://randomuser.me/api/?page=1&results=5"
    const response = await fetch(url)
    const data = await response.json()
    setData(data.results)
    
    console.log(data.results)
  }
//Search by firstname 
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
    const results = data.filter(item => {
      return item.name.first.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(results)
    setFilteredResults(results)
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" placeholder="Search" onChange={handleSearch} />
     
     <div>
        {
          filteredResults.map(item => {
            return (
              <div key={item.login.uuid}>
                <img src={item.picture.thumbnail} alt=""/>
                <h3>{item.name.first}</h3>
                <p>{item.email}</p>
              </div>
            )
          })
        }
     </div>
      {
        data.map((item, index) => {
          return (
            <div key={index} className="main">
              <img src={item.picture.thumbnail} />
              <h2>{item.name.title} {item.name.first} {item.name.last}</h2>


            </div>
          )
        })
      }
    </div>
  )
}




