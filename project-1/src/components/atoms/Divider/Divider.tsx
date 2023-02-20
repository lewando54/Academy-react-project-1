import React from 'react'
import styled from 'styled-components'

interface IDividerProps {
  text: string
}

const StyledHr = styled.hr`
    border-top: 2px solid #e5e7eb;
    width: 100%;
`

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

const StyledP = styled.p`
    padding: 0.25rem/* 4px */;
    border: 2px solid rgb(156 163 175);
    opacity: 0.3;
    border-radius: 0.375rem;
    font-size: 0.875rem/* 14px */;
    line-height: 1.25rem/* 20px */;
    margin: 0;
`

// Divider -> Text jest optional !! Zmień nazwę. Sprawdzić defaultProps

function Divider ({ text = '' }: IDividerProps): React.ReactElement {
  return (
        <StyledDiv>
            <StyledHr/>
            { text ? <StyledP>{text}</StyledP> : null}
            <StyledHr/>
        </StyledDiv>
  )
}

export default Divider
