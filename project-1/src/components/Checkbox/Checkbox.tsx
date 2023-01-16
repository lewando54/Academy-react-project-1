import React from 'react';
import {useState, useEffect} from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
    id: string,
    onChecked: Function
}
// Checkbox powinien mieć stan checked (kontrolowany komponent)
function Checkbox({id, children, onChecked, ...props}: CheckboxProps){
    const [checked, setChecked] = useState(false);

    const onChangeHandler = () => {
        setChecked(prev => !prev);
    }

    useEffect(() => {
        onChecked(checked);
    }, [checked]);

    return (
        <div className='w-full flex gap-1 justify-start'>
            <input id={id} type="checkbox" onChange={onChangeHandler} {...props}/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;