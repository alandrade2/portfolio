'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Projetos',
        href: '/projects',        
    },
    {
        label: 'contato',
        href: '/contact',        
    },
    {
        label: 'Formação',
        href: '/formation',        
    }
]

export const Header = () => {
    return(
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center bg-gray-500/20">
            <div className="container flex items-center justify-between">
                <Link href="/">

                <Image 
                width={50}
                height={50}
                src={"/images/logo.svg"} 
                alt={"Logo portifolio Andre Luiz"} />
                </Link>

<nav className="flex items-center gap-4 sm:gap-10">
    {NAV_ITEMS.map(item => (
        <NavItem {...item} key={item.label} />
    ))}
</nav>

            </div>
        </header>
    )
}