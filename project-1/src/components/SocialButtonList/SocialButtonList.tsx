import SocialButton, { iconProp } from "../SocialButton/SocialButton";

// zaimportuj typ

function SocialButtonList(){
    const socials: {id: number, color: string, icon: iconProp, href: URL['href']}[] = [
        {id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/'},
        {id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/'},
        {id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/'}
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