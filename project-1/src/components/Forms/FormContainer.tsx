import styled from 'styled-components'

const FormContainer = styled.div`
    width: 75%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 2.5rem;
    border-radius: 0.5rem;
    color: black;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    background-color: white;
    @media (min-width: 768px) {
        width: 33.333333%;
    }
    @media (min-width: 1024px) {
            width: 25%;
    }
`;

export default FormContainer;