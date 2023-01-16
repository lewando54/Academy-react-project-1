import React, {useState, useEffect} from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    onInputChange: Function
}

function Input({id, onInputChange, name}: InputProps){
    const [value, setValue] = useState('');

    function handleChange(e: React.FormEvent<HTMLInputElement>){
        setValue(e.currentTarget.value);
    }

    useEffect(() => {
        onInputChange(value);
    }, [value]);
    
    return (
        <div className="w-full">
            <label htmlFor={id}>{name}</label>
            <input value={value} onChange={handleChange} id={id} className="w-full border-2 bg-white rounded-md text-lg p-1"/>
        </div>
    )
}

export default Input