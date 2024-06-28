import { useEffect, useState } from "react"
import Profile from "../Profile"


export default function Contact() {
	const [contact, setContact] = useState([])
	async function fetchContact() {
		const response = await fetch('http://localhost:3333/contact')
		const data = await response.json()
		console.log(data)
		// console.log(data[0].prenom)
		setContact(data)
		console.log(contact)
	}

	useEffect(() => {
		fetchContact()
	}, [])
	return (
		<div>
			{contact.length > 0 && 
			<div>

				<Profile nom={contact[0].nom} prenom={contact[0].prenom}/>
				<h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">CONTACT</h2>
				<table>
					<tr>
						<th>Tel</th>
						<td>{contact[0].tel}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{contact[0].email}</td>
					</tr>
					<tr>
						<th>Adresse</th>
						<td>{contact[0].adresse}</td>
					</tr>
				</table>
			</div>
			}
		</div>
	)
}
