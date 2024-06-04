import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"
export default function Competence() {
    const [competence, setCompetence] = useState([])
    const fetchCompetence = async () => {
        const response = await fetch(`${BASE_URL}/competence`)
        const data = await response.json()
        setCompetence(data)
    }

    useEffect(() => {
        fetchCompetence()
    }, [])
    return (
        <div>
            <h2 className='title'>Compétences</h2>
            <ul>
                {competence && competence.map(item => <li key={item._id}>{item.skill}</li>)}
            </ul>
        </div>
    )
}
