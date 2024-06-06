import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { LiaSaveSolid } from "react-icons/lia";


const BASE_URL = "http://localhost:5555"
export default function AdminContact() {
    const [tel, setTel] = useState("")
    const [mail, setMail] = useState("")
    const [adresse, setAdresse] = useState("")

    const fetchContact = async () => {
        const response = await fetch(`${BASE_URL}/contact`)
        const data = await response.json()
        console.log(data);
        setAdresse(data[0].adresse)
        setTel(data[0].tel)
        setMail(data[0].mail)

    }

    useEffect(() => {
        fetchContact()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()

        const response = await fetch(`${BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tel, mail, adresse })
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
        }
    }
    return (
        <div className='contact'>
            <h2 className=''>Contact</h2>
            <form onSubmit={handleSave}  >
                <div className='admin-contact'>
                    <label>Tel</label>
                    <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className='admin-contact'>
                    <label>Mail</label>
                    <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
                <div className='admin-contact'>
                    <label>Adresse</label>
                    <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                </div>
                <div className='flex-end'>
                    <button><LiaSaveSolid color='green' size={20} /></button>

                </div>
            </form>

        </div>
    )
}
