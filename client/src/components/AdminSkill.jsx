import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const BASE_URL = "http://localhost:5555"
export default function AdminSkill() {
    const [skill, setSkill] = useState("")
    const [add, setAdd] = useState(false)
    const [competence, setCompetence] = useState([])

    const fetchCompetence = async () => {
        const response = await fetch(`${BASE_URL}/competence`)
        const data = await response.json()
        setCompetence(data)
    }

    useEffect(() => {
        fetchCompetence()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/competence/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'warning', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchCompetence()
        }
    }

    const handleAdd = async () => {
        setAdd(true)
    }

    async function handleSave() {
        const response = await fetch(`${BASE_URL}/competence/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ skill })
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchCompetence()
            setAdd(false)
            setSkill('')
        }
    }

    function handleClose() {
        setAdd(false)
        setSkill('')
    }

    return (
        <div className='competence'>
            <div className='flex-add'>
                <h2 className=''>Compétences</h2>
                {!add &&
                    <div className=''>
                        <button onClick={handleAdd}>
                            <MdAddBox color='blue' size={20} />
                        </button>
                    </div>
                }

            </div>
            {add &&
                <div className='add-skill'>
                    <input
                        className='admin-input'
                        placeholder='Ajouter une compétence'
                        type='text'
                        value={skill}
                        onChange={(e) => { setSkill(e.target.value) }} />
                    <div className='btn-save-close'>
                        <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                        <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                    </div>
                </div>
            }


            {competence && competence.map(item =>
                <div className='admin-competence' key={item._id}>
                    <p>{item.skill}</p>
                    <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }
        </div>
    )
}
