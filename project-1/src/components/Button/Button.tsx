import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { StyledButton } from './Button.style';

type colorProp = 'primary'|'secondary';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    color: colorProp
}

function Button({color, children, onClick}: ButtonProps){
    const colorOptions: {[key in colorProp]: string} = {
        'primary': 'rgb(236 72 153)',
        'secondary': 'rgb(229 231 235)'
    }

    return (
        <StyledButton onClick={onClick} style={{backgroundColor: colorOptions[color]}}>
            {children}
        </StyledButton>
    )
}

export default Button