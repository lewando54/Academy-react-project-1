import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

export type iconProp = 'facebook'|'google'|'linkedin';

interface socialButtonProps {
    color: string,
    href: string,
    icon: iconProp
}

function SocialButton({color, href, icon}: socialButtonProps){
    const icons: {[key in iconProp]: React.ReactNode} = {
        'facebook': <FaFacebookF/>,
        'google': <FaGoogle/>,
        'linkedin': <FaLinkedinIn/>
    }
    return(
        <a className={"rounded-full p-2 border-2"} style={{borderColor: color, color: color}} href={href}>
            {icons[icon]}
        </a>
    )
}

export default SocialButton