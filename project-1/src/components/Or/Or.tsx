import styled from "styled-components";

interface divider{
    text?: string
}

const StyledHr = styled.hr`
    border-top: 2px solid #e5e7eb;
    width: 100%;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

function Or({text}: divider){
    const Text = (text != undefined) ? <p className="p-1 border-2 text-gray-400 rounded-md text-sm">{text}</p> : '';

    return (
        <StyledDiv>
            <StyledHr/>
            {Text} 
            <StyledHr/>
        </StyledDiv>
    )
}

export default Or;