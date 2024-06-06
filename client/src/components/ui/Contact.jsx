import { useState, useEffect } from 'react';




const BASE_URL = "http://localhost:5555"
export default function Contact() {
	const [contact, setContact] = useState()
	const fetchContact = async () => {
		const response = await fetch(`${BASE_URL}/contact`)
		const data = await response.json()
		setContact(data)
	}
	useEffect(() => {
		fetchContact()
	}, [])
	return (
		<div>
			{contact &&
				<div className=''>
					<h2 className='title'>Contact</h2>
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
				</div>
			}
		</div>
	)
}
