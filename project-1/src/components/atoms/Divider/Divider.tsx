import React from 'react'
import { StyledDiv, StyledHr, StyledP } from './Divider.style'

interface IDividerProps {
  text: string
}

// Divider -> Text jest optional !! Zmień nazwę. Sprawdzić defaultProps

function Divider ({ text = '' }: IDividerProps): React.ReactElement {
  return (
        <StyledDiv>
            <StyledHr/>
            { (text.length > 0) ? <StyledP>{text}</StyledP> : null}
            <StyledHr/>
        </StyledDiv>
  )
}

export default Divider
