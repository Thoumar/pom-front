import { useState, useEffect } from "react";

const Contacts = () => {
	const [contactList, setContactList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/contacts")
			.then((response) => response.json())
			.then((json) => {
				setContactList(json);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const noView = <div>You don't have any contacts</div>;

	const contactsView = (
		<div>
			{contactList.map((contact, index) => {
				return (
					<div key={index}>
						{contact.firstName},{contact.lastName}
					</div>
				);
			})}
		</div>
	);

	return contactList.legth > 0 ? noView : contactsView;
};

export default Contacts;
