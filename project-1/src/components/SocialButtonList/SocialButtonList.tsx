import SocialButton from "../SocialButton/SocialButton";

import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

function SocialButtonList(){
    const socials = [
        {id: 0, color: '#e90800', icon: FaGoogle, href: 'https://google.pl/'},
        {id: 1, color: '#4768aa', icon: FaFacebookF, href: 'https://google.pl/'},
        {id: 2, color: '#0068c1', icon: FaLinkedinIn, href: 'https://google.pl/'}
    ];

    const socialItems = socials.map(social => 
        <SocialButton key={social.id} color={social.color} href={social.href} icon={social.icon}/>
    )

    return (
        <div className="w-full flex justify-center gap-4">
            {socialItems}
        </div>
    )
}

export default SocialButtonList