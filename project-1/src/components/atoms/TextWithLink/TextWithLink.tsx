import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledDiv, StyledLink } from './TextWithLink.style'

interface TextWithLinkProps {
  paragraphText: string
  href: string
  anchorText: string
}

function TextWithLink ({ paragraphText, href, anchorText }: TextWithLinkProps): React.ReactElement {
  const navigate = useNavigate()

  const onClick = (): void => {
    navigate(href)
  }

  return (
        <StyledDiv>
            <p>{paragraphText}</p>
            <StyledLink onClick={onClick}>
                {anchorText}
            </StyledLink>
        </StyledDiv>
  )
}

export default TextWithLink
