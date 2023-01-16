import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    color: string,
}

const StyledButton = styled.button`
    color: white;
    border-radius: 0.375rem;
    width: 100%;
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    letter-spacing: 0.025em;
`;

function Button({color, children, ...props}: ButtonProps){
    const [bgColor, setBgColor] = useState('');
    const colorOptions: any = {
        'primary': 'rgb(236 72 153)',
        'secondary': 'rgb(229 231 235)'
    }
    useEffect(() => {
        setBgColor(color);
    }, [color])

    return (
        <StyledButton {...props} style={{backgroundColor: colorOptions[bgColor]}}>
            {children}
        </StyledButton>
    )
}

export default Button