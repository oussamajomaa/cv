import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const BASE_URL = "http://localhost:5555"

export default function AdminLoisir() {
    const [description, setDescription] = useState("")
    const [add, setAdd] = useState(false)
    const [loisir, setLoisir] = useState([])

    const fetchLoisir = async () => {
        const response = await fetch(`${BASE_URL}/loisir`)
        const data = await response.json()
        setLoisir(data)
        console.log(data);
    }

    useEffect(() => {
        fetchLoisir()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/loisir/${id}`, {
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
            fetchLoisir()
        }
    }

    const handleAdd = async () => {
        setAdd(true)
    }

    async function handleSave() {
        const response = await fetch(`${BASE_URL}/loisir/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchLoisir()
            setAdd(false)
            setDescription('')
        }
    }

    function handleClose() {
        setAdd(false)
        setDescription('')
    }

    return (
        <div className='competence'>
            <div className='flex-add'>
                <h2 className=''>Centre d'intérêts</h2>
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
                        placeholder='Ajouter un loisir'
                        type='text'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    <div className='btn-save-close'>
                        <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                        <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                    </div>
                </div>
            }


            {loisir && loisir.map(item =>
                <div className='admin-competence' key={item._id}>
                    <p>{item.description}</p>
                    <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }
        </div>
    )
}