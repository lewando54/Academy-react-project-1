import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { StyledButton } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    color: string
}

function Button({color, children, onClick}: ButtonProps){
    const [bgColor, setBgColor] = useState('');
    const colorOptions: any = {
        'primary': 'rgb(236 72 153)',
        'secondary': 'rgb(229 231 235)'
    }

    return (
        <StyledButton onClick={onClick} style={{backgroundColor: colorOptions[bgColor]}}>
            {children}
        </StyledButton>
    )
}

export default Button