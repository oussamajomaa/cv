import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"
export default function Experience() {
    const [experience, setExperience] = useState([])
    async function fetchExperience() {
        const response = await fetch(`${BASE_URL}/experience`)
        const data = await response.json()
        setExperience(data)
        console.log(data);
    }
    useEffect(() => {
        fetchExperience()
    }, [])
    return (
        <div>
            <h2 className='title'>Expériences Professionnelles</h2>
            {experience && experience.map(item =>
                <div key={item._id} className='block'>
                    <div className='exp-formation'>
                        <h4>Année</h4>
                        <p>{item.year}</p>
                    </div>
                    <div className='exp-formation'>
                        <h4>Enreprise</h4>
                        <p>{item.company}</p>
                    </div>
                    <div className='exp-formation'>
                        <h4>Poste</h4>
                        <p>{item.job}</p>
                    </div>
                    <div className='exp-formation'>
                        <h4>Mission</h4>
                        <p>{item.mission}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
