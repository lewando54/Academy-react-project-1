import React from 'react'
import StyledHeading from './Heading.style'

export interface IHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: React.ReactNode | string
  testId: string
}

function Heading ({ level = 1, children, testId }: IHeadingProps): React.ReactElement {
  return (
    <StyledHeading as={`h${level}`} data-testid={testId}>
      {children}
    </StyledHeading>
  )
}

export default Heading
