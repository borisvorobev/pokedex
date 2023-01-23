import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default () => {
  const [history, setHistory] = useState([])
  useEffect(() => {
    const saved = localStorage.getItem("pokedex-history") ?? "[]";
    const historyArray = JSON.parse(saved as string);
    setHistory(historyArray);
  }, [])

  return (
    <main className='container'>
      <NavBar />
      <div className="lists">
        <h1>
          Search History
        </h1>
        <p>
          Click a pokemon name to search it
        </p>
        <ul className="nes-list is-disc">
          {
            history.length < 1 ? (<li>No history for this session</li>) : (
              history.map((pokemon, id) => (
                <li key={`history-list-${pokemon}-${id}`}>
                  <Link to={`/${pokemon}`} className="nes-badge">
                    <span className="is-primary">{pokemon}</span>
                  </Link>
                </li>
              ))
            )
          }
        </ul>
      </div>
    </main>
  )
}