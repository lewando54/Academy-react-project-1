import React from 'react';
import {useState} from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    innerRef: React.RefObject<HTMLInputElement>,
    children: string,
    id: string,
}

function Checkbox({id, children, innerRef}: CheckboxProps){
    return (
        <div className='w-full flex gap-1 justify-start'>
            <input ref={innerRef} id={id} type="checkbox"/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;