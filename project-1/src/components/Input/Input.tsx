import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    onInputChange: Function,
    type: string
}

const StyledInput = styled.input`
    width: 100%;
    border: 2px solid #e5e7eb;
    background-color: rgb(255 255 255);
    border-radius: 0.375rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.25rem;
`;

function Input({id, onInputChange, name, type}: InputProps){
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
            <StyledInput value={value} onChange={handleChange} id={id} name={name} type={type}/>
        </div>
    )
}

export default Input