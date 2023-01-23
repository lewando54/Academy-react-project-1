import React from 'react';
import {useState} from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
    id: string,
    onChecked: Function
}

function Checkbox({id, children, onChecked}: CheckboxProps){
    const [checked, setChecked] = useState(false);

    const onChangeHandler = () => {
        setChecked(prev => !prev);
        onChecked(checked);
    }

    return (
        <div className='w-full flex gap-1 justify-start'>
            <input id={id} type="checkbox" onChange={onChangeHandler}/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;