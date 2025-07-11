'use client';
import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Button from '../ui/Button';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { 
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container w-full mx-auto h-16 flex justify-between items-center z-20 relative">
                <Link href="/">
                    <img src="/images/logo-coderlabs.svg" alt="Coderlabs" className="h-8 w-auto" />
                </Link>

                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <IconX color='white' /> : <IconMenu2 color='white' />}
                </button>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/#servicios" className='text-coder-grayblue hover:text-white'>Servicios</Link>
                    <Link href="/casos-estudio" className='text-coder-grayblue hover:text-white'>Casos de Estudio</Link>
                    <Link href="#" className='text-coder-grayblue hover:text-white'>Videos</Link>
                    <Button title='Contacto' buttonStyle='solid' href='#' sizeText='small' />
                </nav>
            </div>

            {/* Menú móvil */}
            <div className={`absolute top-0 z-10 right-0 w-full h-full p-4 bg-black md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col items-start gap-4 py-4 text-white mt-16">
                    <Link href="/#servicios" onClick={toggleMenu} className='border-0 border-b border-gray-800 w-full h-10'>Servicios</Link>
                    <Link href="/casos-estudio" onClick={toggleMenu} className='border-0 border-b border-gray-800 w-full h-10'>Casos de Estudio</Link>
                    <Link href="#" onClick={toggleMenu} className='border-0 border-b border-gray-800 w-full h-10'>Videos</Link>
                    <Button title='Contacto' buttonStyle='solid' href='#' sizeText='small' />
                </nav>
            </div>
        </header>

    )
}

export default Header