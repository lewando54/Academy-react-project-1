import styled from 'styled-components'

export const StyledButton = styled.button`
    --primary: rgb(236, 72, 153);
    --secondary: rgb(229, 231, 235);
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
    border: 0;
    cursor: pointer;
    background-color: var(--${props => props.color});
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.05);
    }
`
