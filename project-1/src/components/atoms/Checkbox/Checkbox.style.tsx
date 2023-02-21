import styled from 'styled-components'

const StyledCheckbox = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 1.6em;
    height: 1.6em;
    border-radius: 0.15em;
    margin-right: 0.5em;
    border: 0.15em solid #e5e7eb;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:before {
        content: "";
        font-size: 1.5em;
        color: #fff;
        position: absolute;
        right: 1px;
        top: -5px;
        transform: translateX(-3px) translateY(4px) rotateZ(180deg) rotateY(180deg);
        clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
        transition: clip-path 0.3s ease-in-out;
    }

    &:hover{
        border: 0.15em solid ${props => (props.color != null) ? props.color : 'var(--primary)'};
    }

    &:checked {
        border: 0.15em solid ${props => (props.color != null) ? props.color : 'var(--primary)'};
        background-color: ${props => (props.color != null) ? props.color : 'var(--primary)'};
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:checked:before {
        content: "L";
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        position: absolute;
        right: 1px;
        top: -5px;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        transform: translateX(-3px) translateY(4px) rotateZ(45deg) rotateY(180deg);
    }
`

export default StyledCheckbox
