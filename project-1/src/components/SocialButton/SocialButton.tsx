import { ReactElement, ReactNode, SVGProps } from "react";
import React from 'react';
import { IconType } from "react-icons/lib/esm/iconBase"

interface socialButtonProps {
    color: string,
    href: string,
    icon: IconType
}

function SocialButton({color, href, icon}: socialButtonProps){
    return(
        <a className={"rounded-full p-2 border-2"} style={{borderColor: color, color: color}} href={href}>
            {React.createElement(icon)}
        </a>
    )
}

export default SocialButton