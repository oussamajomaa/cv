import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
const BASE_URL = "http://localhost:5555"

export default function AdminFormation() {
    const [formation, setFormation] = useState([])
    const [year, setYear] = useState('')
    const [establishment, setEstablishment] = useState('')
    const [description, setDescription] = useState('')
    const [add, setAdd] = useState(false)



    const fetchFormation = async () => {
        const response = await fetch(`${BASE_URL}/formation`)
        const data = await response.json()
        setFormation(data)
        console.log(data);
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/langue/${id}`, {
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
            fetchFormation()
        }

    }

    const handleAdd = async () => {
        setAdd(true)

    }

    function handleClose() {
        setAdd(false)
        setYear('')
        setEstablishment('')
        setAdd('')
    }

    const handleSave = async () => {
        const response = await fetch(`${BASE_URL}/langue`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ year, establishment, description })
        })

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchFormation()
            setAdd(false)
            setYear('')
            setEstablishment('')
            setAdd('')
        }
    }
    return (
        <div className='langue'>
            <div className='flex-add'>

                <h2 className='item'>Formations</h2>
                {!add &&
                    <div className='item'>
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
                        placeholder='Année'
                        type='text'
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }} />
                    <input
                        className='admin-input'
                        placeholder='Etablissement'
                        type='text'
                        value={establishment}
                        onChange={(e) => { setEstablishment(e.target.value) }} />
                    <input
                        className='admin-input'
                        placeholder='Diplôme'
                        type='text'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    

                    <div className='btn-save-close'>
                        <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                        <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                    </div>
                </div>
            }
            
            {formation && formation.map(item =>
                <div className='block' key={item._id}>
                    <div className='exp-formation'>
                        <h4>Année</h4>
                        <p>{item.year}</p>
                    </div>
                    <div className='exp-formation'>
                        <h4>Entreprise</h4>
                        <p>{item.establishment}</p>
                    </div>
                    <div className='exp-formation'>
                        <h4>Poste</h4>
                        <p>{item.description}</p>
                    </div>

                    <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }

        </div>
    )
}
