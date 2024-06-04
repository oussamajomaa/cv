import { useState, useEffect } from 'react';

import AdminContact from '../components/AdminContact';
import AdminSkill from '../components/AdminSkill';
import { Link } from 'react-router-dom';
import AdminLangue from '../components/AdminLangue';
import AdminLoisir from '../components/AdminLoisir';



const BASE_URL = "http://localhost:5555"

export default function Admin() {

    const [langue, setLangue] = useState([])
    const [loisir, setLoisir] = useState([])
    const [experience, setExperience] = useState([])
    const [formation, setFormation] = useState([])




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
        fetchLangue()
        fetchLoisir()
        fetchExperience()
        fetchFormation()
    }, [])


    return (
        <div className="admin">
            <Link className='link' to={'/'}>HOME</Link>
            <div className="row">
                {/* <div className='avatar'>
                    <img src="avatar.png" alt="" />
                </div> */}
                <div className='col'>

                    <AdminContact />
                </div>
                <div className='col'>
                    <AdminSkill />

                </div>
                <div className='col'>
                    <AdminLangue />

                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <AdminLoisir />
                </div>
                <div className='col'>
                    <AdminLoisir />
                </div>
                <div className='col'>
                    <AdminLoisir />
                </div>
            </div>
        </div>
    )
}
