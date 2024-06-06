import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
const BASE_URL = "http://localhost:5555"

export default function AdminExperience() {
	const [experience, setExperience] = useState([])
	const [year, setYear] = useState('')
	const [company, setCompany] = useState('')
	const [job, setJob] = useState('')
	const [mission, setMission] = useState('')
	const [add, setAdd] = useState(false)


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
        setCompany('')
        setJob('')
        setMission('')
    }
	return (
		<div>AdminExperience</div>
	)
}
