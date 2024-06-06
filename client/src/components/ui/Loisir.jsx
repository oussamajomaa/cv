import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"
export default function Loisir() {
    const [loisir, setLoisir] = useState([])
    const fetchLoisir = async () => {
        const response = await fetch(`${BASE_URL}/loisir`)
        const data = await response.json()
        setLoisir(data)
    }


    useEffect(() => {
        fetchLoisir()
    }, [])
    return (
        <div>
            <h2 className='title'>Centre d'intérêts</h2>
            <ul>
                {loisir && loisir.map(item => <li key={item._id}>{item.description}</li>)}
            </ul>
        </div>
    )
}
