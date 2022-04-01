import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { Checkbox } from '@mui/material';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        console.log("h", props.name)
    };

    const handleReset = () => {
        setIsChecked(isChecked);
    }

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <Checkbox
                checked={isChecked}
                onChange={handleOnChange}
            />  
            {props.name}
            <div>
                ${props.cost} {props.dueDate}
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;