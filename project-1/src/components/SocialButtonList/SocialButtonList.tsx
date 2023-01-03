import SocialButton from "../SocialButton/SocialButton";
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Google} from '../../assets/google.svg'
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg'

function SocialButtonList(){
    const socials = [
        {id: 0, color: 'red', icon: <Google />, href: 'https://google.pl/'},
        {id: 1, icon: <Facebook/>, color: 'blue', href: 'https://google.pl/'},
        {id: 2, icon: <Linkedin/>, color: 'cyan', href: 'https://google.pl/'}
    ];

    const socialItems = socials.map(social => 
        <SocialButton key={social.id} color={social.color} href={social.href}>
            {social.icon}
        </SocialButton>
    )

    return (
        <div className="w-full flex justify-center gap-4">
            {socialItems}
        </div>
    )
}

export default SocialButtonList