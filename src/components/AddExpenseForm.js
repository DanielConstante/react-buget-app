import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { Add } from '@mui/icons-material';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
    const [dueDate, setDueDate] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
			dueDate,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
		setDueDate('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
                <div class='col-sm col-lg-4'>
					<label for='cost'>Due Date</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='dueDate'
						value={dueDate}
						onChange={(event) => setDueDate(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
					 <Add/> Add Expense
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;