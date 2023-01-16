import React, {useState, useEffect} from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    color: string,
}

function Button({color, children, ...props}: ButtonProps){
    const [bgColor, setBgColor] = useState('');
    const colorOptions: any = {
        'primary': 'bg-pink-500',
        'secondary': 'bg-gray-200'
    }
    useEffect(() => {
        setBgColor(color);
    }, [color])

    return (
        <button {...props} className={'rounded-md text-white text-sm w-full py-2 uppercase shadow-[0_4px_6px_rgba(0,0,0,0.3)] tracking-wide '+colorOptions[bgColor]}>
            {children}
        </button>
    )
}

export default Button