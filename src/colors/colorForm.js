import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

function ColorForm  ({ add }) {
	const [ formData, setFormData ] = useState({ name: '', picker: '#ffffff' });
	const history = useHistory();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		add({ [formData.name]: formData.picker });
		history.push('/colors');
	};

	const { picker, name } = formData;

	return (
		<div className="ColorForm">
			<div className="ColorForm-header">
				<h1>Add New Color!</h1>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="ColorForm-nameGroup">
					<label htmlFor="name">Color Name</label>
					<input
						name="name"
						id="name"
						placeholder="Enter name of color"
						onChange={handleChange}
						value={name}
						type="text"
					/>
				</div>
				<div className="ColorForm-colorGroup">
					<label htmlFor="name">Select Color</label>
					<input name="picker" id="picker" onChange={handleChange} value={picker} type="color" />
				</div>
				<div className="ColorForm-submit">
					<button type="submit">Add Color</button>
				</div>
			</form>
		</div>
	);
};
export default ColorForm;