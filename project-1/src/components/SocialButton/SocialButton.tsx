import { ReactElement, ReactNode, SVGProps } from "react"

interface socialButtonProps {
    children: ReactNode,
    color: string,
    href: string
}

function SocialButton({children, color, href}: socialButtonProps){
    return(
        <a className={"rounded-full p-2 border-4 border-"+color+"-500 text-"+color+"-500"} href={href}>
            {children}
        </a>
    )
}

export default SocialButton