import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledDiv, StyledLink } from './TextWithLink.style'

interface TextWithLinkProps {
  paragraphText: string
  href: string
  anchorText: string
  testId: string
  anchorTagTestId?: string
}

function TextWithLink ({ paragraphText, href, anchorText, testId }: TextWithLinkProps): React.ReactElement {
  const navigate = useNavigate()

  const onClick = (): void => {
    navigate(href)
  }

  return (
        <StyledDiv data-testid={testId}>
            <p>{paragraphText}</p>
            <StyledLink onClick={onClick}>
                {anchorText}
            </StyledLink>
        </StyledDiv>
  )
}

export default TextWithLink
