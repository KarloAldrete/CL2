'use client'; 
import { useState } from 'react';
import { IconMenu2, IconX  } from '@tabler/icons-react';
import Button from './ui/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil

    const toggleMenu = () => { // Función para alternar el estado del menú
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container w-full mx-auto h-16 flex justify-between items-center ">
                <img src="images/logo-coderlabs.svg" alt="Coderlabs" className="h-8 w-auto" />

                {/* Botón del menú de hamburguesa para pantallas pequeñas */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <IconX color='white' /> : <IconMenu2 color='white' />}
                </button>

                {/* Navegación para pantallas grandes */}
                <nav className="
                hidden items-center gap-8 text-white
                md:flex
                ">
                    <a href="#">Servicios</a>
                    <a href="#">Casos de Estudio</a>
                    <a href="#">Videos</a>
                    {/* <a href="#" className='py-2 px-6 bg-coder-green rounded-md text-black'>Contacto</a> */}
                    <Button title='Contacto' buttonStyle='solid' href='#' sizeText='smallText' />
                </nav>
            </div>

            {/* Menú móvil */}
            <div className={`
                absolute top-16 right-0 w-full p-4 bg-[#16191D] 
                md:hidden
                ${isMenuOpen ? 'block' : 'hidden'}
            `}>
                <nav className="flex flex-col items-center gap-4 py-4 text-white">
                    <a href="#" onClick={toggleMenu}>Servicios</a> {/* Agrega onClick para cerrar el menú al hacer clic */}
                    <a href="#" onClick={toggleMenu}>Casos de Estudio</a>
                    <a href="#" onClick={toggleMenu}>Videos</a>
                    {/* <a href="#" className='py-2 px-6 bg-coder-green rounded-md text-black' onClick={toggleMenu}>Contacto</a> */}
                    <Button title='Contacto' buttonStyle='outlined' href='#' sizeText='smallText' />
                </nav>
            </div>
        </header>

    )
}

export default Header