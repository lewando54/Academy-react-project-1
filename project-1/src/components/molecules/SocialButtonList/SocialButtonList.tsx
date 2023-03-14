import React from 'react'
import SocialButton, { iconProp } from '../../atoms/SocialButton/SocialButton'
import SocialButtonListStyle from './SocialButtonList.style'

export type TSocialsArray = Array<{ id: number, color: string, icon: iconProp, href: URL['href'] }>
interface ISocialButtonList {
  socials: TSocialsArray
}

function SocialButtonList ({ socials }: ISocialButtonList): React.ReactElement {
  const socialItems = socials.map(social =>
        <SocialButton key={social.id} color={social.color} href={social.href} icon={social.icon}/>
  )

  return (
        <SocialButtonListStyle>
            {socialItems}
        </SocialButtonListStyle>
  )
}

export default SocialButtonList
