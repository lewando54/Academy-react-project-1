import React from 'react'
import SocialButton, { iconProp } from '../../atoms/SocialButton/SocialButton'
import SocialButtonListStyle from './SocialButtonList.style'

export type TSocialsArray = Array<{ id: number, color: string, icon: iconProp, href: URL['href'], testId?: string }>
interface ISocialButtonList {
  socials: TSocialsArray
  testId: string
}

function SocialButtonList ({ socials, testId }: ISocialButtonList): React.ReactElement {
  const socialItems = socials.map(social =>
        <SocialButton key={social.id} color={social.color} href={social.href} icon={social.icon} testId={testId + social.id.toString()}/>
  )

  return (
        <SocialButtonListStyle data-testid={testId}>
            {socialItems}
        </SocialButtonListStyle>
  )
}

export default SocialButtonList
