import styled from 'styled-components'

export default styled.a`
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.color};
    color: ${props => props.color};
    padding: 0.5rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
