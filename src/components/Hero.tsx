'use client';

import { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';

export default function Hero() {
  // 0: luz-01.webp (apagado), 1: luz-02.webp (encendido)
  const [animationStage, setAnimationStage] = useState(0);
  // Usaremos este ref para manejar el temporizador de retraso al salir
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Cuando el mouse entra, siempre queremos ir a la etapa 1 (luz-02.webp).
    // Cancelamos cualquier temporizador que pudiera estar pendiente para regresar a 0,
    // ya que el usuario ha vuelto a interactuar.
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    // Ir a luz-02.webp inmediatamente al entrar
    setAnimationStage(1);
  };

  const handleMouseLeave = () => {
    // Programar el regreso a luz-01.webp después de la duración de la transición (1000ms).
    // Esto permite que la animación actual (hacia luz-02.webp) termine antes de empezar la de regreso.
    // Primero, limpiar cualquier timeout de leave anterior si existiera (en caso de movimientos rápidos).
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    // Solo programar el regreso si actualmente estamos en la etapa 1 (o yendo hacia ella).
    // Esto evita programar un timeout innecesario si ya estamos en la etapa 0.
    if (animationStage === 1) {
        leaveTimeoutRef.current = setTimeout(() => { setAnimationStage(0); }, 500); // 1000ms debe coincidir con la duración de la transición CSS
    }
  };

  // Limpiar el temporizador al desmontar el componente para evitar memory leaks
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const backgroundImage =
    animationStage === 0
      ? 'url("/luz-01.webp")' 
      : 'url("/luz-02.webp")';

  return (
    <div className="overflow-visible mt-4 lg:mt-28 ">
      <div
        className="absolute top-[150px] inset-0 w-[1101px]] h-[642px] z-[-20] bg-center transition-all duration-500 ease-in-out bg-no-repeat" 
        style={{backgroundImage: backgroundImage,}}
      />


      <div className='flex flex-col items-center justify-center gap-4 z-[-1] mt-16'>
        <h1 className="text-center uppercase">Construimos soluciones <br /> web a tu medida</h1>
        <p className='sm:text-base md:text-xl text-center w-full font-light sm:w-[55%] md:w-[60%]'>Transformamos tus ideas en aplicaciones web robustas y escalables para empresas de todos los tamaños, <span className='text-coder-green'>hacemos que la tecnología trabaje para ti</span></p>

        <div className='flex flex-col md:flex-row gap-4 mt-11'>
          
          <Button title='Agenda una llamada' buttonStyle='solid' href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Button title='Preguntas frecuentes' buttonStyle='outlined' href='#preguntas-frecuentes' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

        </div>
      </div>

    </div>
  );
}
