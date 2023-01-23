import React from 'react'
import {StyledInput} from './Input.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    innerRef: React.RefObject<HTMLInputElement>,
    id: string,
    type: string
}

function Input({id, name, type, innerRef}: InputProps){

    return (
        <div className="w-full">
            <label htmlFor={id}>{name}</label>
            <StyledInput ref={innerRef} id={id} name={name} type={type}/>
        </div>
    )
}

export default Input