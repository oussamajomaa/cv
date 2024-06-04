import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5555"


export default function Home() {
    const [contact, setContact] = useState()
    const [competence, setCompetence] = useState([])
    const [langue, setLangue] = useState([])
    const [loisir, setLoisir] = useState([])
    const [experience, setExperience] = useState([])
    const [formation, setFormation] = useState([])

    const fetchContact = async () => {
        const response = await fetch(`${BASE_URL}/contact`)
        const data = await response.json()
        setContact(data)
    }

    const fetchCompetence = async () => {
        const response = await fetch(`${BASE_URL}/competence`)
        const data = await response.json()
        setCompetence(data)
    }

    const fetchLangue = async () => {
        const response = await fetch(`${BASE_URL}/langue`)
        const data = await response.json()
        setLangue(data)
    }

    const fetchLoisir = async () => {
        const response = await fetch(`${BASE_URL}/loisir`)
        const data = await response.json()
        setLoisir(data)
    }

    async function fetchExperience() {
        const response = await fetch(`${BASE_URL}/experience`)
        const data = await response.json()
        setExperience(data)
        console.log(data);
    }

    async function fetchFormation() {
        const response = await fetch(`${BASE_URL}/formation`)
        const data = await response.json()
        setFormation(data)
        console.log(data);
    }

    useEffect(() => {
        fetchContact()
        fetchCompetence()
        fetchLangue()
        fetchLoisir()
        fetchExperience()
        fetchFormation()
    }, [])
    return (
        <div className="container">
            <Link className='link' to={'/admin'}>ADMIN</Link>
            <div className='left-side'>
                <div className='avatar'>
                    <img src="avatar.png" alt="" />
                    <h2>NOM & PRENOM</h2>
                </div>


                <h2 className='title'>Contact</h2>
                {contact &&
                    <table>
                        <tbody key={contact[0]._id}>
                            <tr>
                                <th>Tel</th>
                                <td>{contact[0].tel}</td>
                            </tr>
                            <tr>
                                <th>Mail</th>
                                <td>{contact[0].mail}</td>
                            </tr>
                            <tr>
                                <th>Adresse</th>
                                <td>{contact[0].adresse}</td>
                            </tr>
                        </tbody>
                    </table>
                }




                <h2 className='title'>Compétences</h2>
                <ul>
                    {competence && competence.map(item => <li key={item._id}>{item.skill}</li>)}
                </ul>



                <h2 className='title'>Langues</h2>
                <table>
                    <tbody>
                        {langue && langue.map(item =>
                            <tr key={item._id}>
                                <th>{item.name}</th>
                                <td>{item.level}</td>
                            </tr>)}
                    </tbody>
                </table>



                <h2 className='title'>Centre d'intérêts</h2>
                <ul>
                    {loisir && loisir.map(item => <li key={item._id}>{item.description}</li>)}
                </ul>



            </div>
            <div className='right-side'>
                <h1>Curriculum Vitae</h1>

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

        </div>
    );
}
