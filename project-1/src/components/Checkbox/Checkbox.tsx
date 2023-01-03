import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
    id: string
}

function Checkbox({id, children, ...props}: CheckboxProps){
    return (
        <div className='w-full flex gap-1 justify-start'>
            <input id={id} type="checkbox" {...props}/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;