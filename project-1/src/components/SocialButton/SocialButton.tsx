import { ReactElement, ReactNode, SVGProps } from "react";
import React from 'react';
import { IconType } from "react-icons/lib/esm/iconBase"
// tutaj importować ikony (chyba wtedy było lepiej)
import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
interface socialButtonProps {
    color: string,
    href: string,
    icon: string
}

function SocialButton({color, href, icon}: socialButtonProps){
    const Icons: any = {
        'facebook': <FaFacebookF/>,
        'google': <FaGoogle/>,
        'linkedin': <FaLinkedinIn/>
    }
    return(
        <a className={"rounded-full p-2 border-2"} style={{borderColor: color, color: color}} href={href}>
            {Icons[icon]}
        </a>
    )
}

export default SocialButton