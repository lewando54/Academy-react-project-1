import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'
import SocialButtonStyle from './SocialButton.style'
export type iconProp = 'facebook' | 'google' | 'linkedin'

interface socialButtonProps {
  color: string
  href: string
  icon: iconProp
  testId: string
}

function SocialButton ({ color, href, icon, testId }: socialButtonProps): React.ReactElement {
  const icons: { [key in iconProp]: React.ReactNode } = {
    facebook: <FaFacebookF/>,
    google: <FaGoogle/>,
    linkedin: <FaLinkedinIn/>
  }
  return (
        <SocialButtonStyle color={color} href={href} data-testid={testId}>
            {icons[icon]}
        </SocialButtonStyle>
  )
}

export default SocialButton
