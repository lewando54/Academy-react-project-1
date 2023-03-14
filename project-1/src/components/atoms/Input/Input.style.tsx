import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    border: 2px solid #e5e7eb;
    background-color: rgb(255 255 255);
    border-radius: 0.375rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.25rem;
    color: black;

    &:focus{
        border: 2px solid blue;
    }
`

export default StyledInput
