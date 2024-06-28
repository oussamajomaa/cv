
import React, { useEffect, useState } from 'react'

export default function Competence() {
    const [competences,setCompetences] = useState([])
    async function fetchCompetence(){
        const response = await fetch('http://localhost:3333/competence')
        const data = await response.json()
        setCompetences(data)
    }

    useEffect(()=>{
        fetchCompetence()
    },[])
    
  return (
    <div>
        <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">COMPETENCES</h2>
        <ul>
            {competences.map(item => <li key={item._id}>{item.skill}</li>)}

        </ul>
    </div>
  )
}
