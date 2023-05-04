import React from 'react'
import { StyledDiv, StyledHr, StyledP } from './Divider.style'

interface IDividerProps {
  text?: string
  testId: string
}

function Divider ({ text = '', testId }: IDividerProps): React.ReactElement {
  return (
        <StyledDiv data-testid={testId}>
            <StyledHr/>
            { (text.length > 0) ? <StyledP>{text}</StyledP> : null}
            <StyledHr/>
        </StyledDiv>
  )
}

export default Divider
