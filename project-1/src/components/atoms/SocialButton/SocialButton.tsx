import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'
import SocialButtonStyle from './SocialButton.style'
export type iconProp = 'facebook' | 'google' | 'linkedin'

interface socialButtonProps {
  color: string
  href: string
  icon: iconProp
}

function SocialButton ({ color, href, icon }: socialButtonProps): React.ReactElement {
  const icons: { [key in iconProp]: React.ReactNode } = {
    facebook: <FaFacebookF/>,
    google: <FaGoogle/>,
    linkedin: <FaLinkedinIn/>
  }
  return (
        <SocialButtonStyle style={{ borderColor: color, color }} href={href}>
            {icons[icon]}
        </SocialButtonStyle>
  )
}

export default SocialButton
