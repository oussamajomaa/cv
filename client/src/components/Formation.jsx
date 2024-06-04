import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"
export default function Formation() {
    const [formation, setFormation] = useState([])
    async function fetchFormation() {
        const response = await fetch(`${BASE_URL}/formation`)
        const data = await response.json()
        setFormation(data)
        console.log(data);
    }

    useEffect(() => {
        fetchFormation()
    }, [])
  return (
    <div>
        <h2 className='title'>Formations</h2>

{formation && formation.map(item =>
    <div key={item._id} className='block'>
        <div className='exp-formation'>
            <h4>Année</h4>
            <p>{item.year}</p>
        </div>
        <div className='exp-formation'>
            <h4>Etablissement</h4>
            <p>{item.establishment}</p>
        </div>
        <div className='exp-formation'>
            <h4>Diplôme</h4>
            <p>{item.description}</p>

        </div>
    </div>
)}
    </div>
  )
}
