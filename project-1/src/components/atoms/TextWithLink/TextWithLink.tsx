import React from 'react'
import { Link } from 'react-router-dom'
import { StyledDiv } from './TextWithLink.style'

interface TextWithLinkProps {
  pText: string
  href: string
  anchorText: string
}

function TextWithLink ({ pText, href, anchorText }: TextWithLinkProps): React.ReactElement {
  return (
        <StyledDiv>
            <p>{pText}</p>
            <Link to={href} className='underline'>
                {anchorText}
            </Link>
        </StyledDiv>
  )
}

export default TextWithLink
