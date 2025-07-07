"use client"; // <-- Indica que este es un Client Component

import { useState } from 'react'; // <-- Importamos useState aquí

export default function ContactForm() {

    // --- Estado del formulario ---
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        correoElectronico: '',
        telefono: '',
        mensajeCorto: '',
        tipoProyecto: '',
    });

    // --- Estado para manejo de envío y mensajes ---
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

    // --- Manejador de cambios en los inputs ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setSubmitStatus(''); // Limpiar estado al empezar a escribir de nuevo
    };

    // --- Manejador de envío del formulario ---
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        setIsSubmitting(true); // Indicar que el envío está en curso
        setSubmitStatus(''); // Limpiar estado de envío previo

        try {
            const response = await fetch('/api/contact', { // Envía los datos a la Ruta de API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Envía los datos del estado como JSON
            });

            if (response.ok) {
                setSubmitStatus('success'); // Indicar éxito
                // Opcional: Limpiar el formulario después de un envío exitoso
                setFormData({
                    nombreCompleto: '',
                    correoElectronico: '',
                    telefono: '',
                    mensajeCorto: '',
                    tipoProyecto: '',
                });
            } else {
                setSubmitStatus('error'); // Indicar error
                const errorData = await response.json();
                console.error('Error al enviar el formulario:', errorData);
            }
        } catch (error) {
            console.error('Error en la solicitud fetch:', error);
            setSubmitStatus('error'); // Indicar error
        } finally {
            setIsSubmitting(false); // Finalizar el estado de envío
        }
    };


    return (
        // JSX del formulario, con clases de Tailwind
        <div className='max-w-2xl p-6 bg-[#16191D] rounded-lg mx-2 sm:mx-auto sm:p-8'>
            <form onSubmit={handleSubmit}>
                {/* Campo Nombre Completo */}
                <div className='flex gap-4 justify-center items-center w-full'>
                <div className='mb-4 w-full'>
                    <label htmlFor='nombreCompleto' className='block text-sm font-medium text-gray-300'>Nombre/Empresa</label>
                    <input type='text' id='nombreCompleto' name='nombreCompleto' value={formData.nombreCompleto} onChange={handleInputChange} className='mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-coder-green focus:ring focus:ring-coder-green focus:ring-opacity-50 bg-[#282D34] text-white p-2 placeholder-white placeholder-opacity-25'  placeholder='Tu nombre o el de tu empresa' />
                </div>
                {/* Campo Correo Electrónico */}
                <div className='mb-4 w-full'>
                    <label htmlFor='correoElectronico' className='block text-sm font-medium text-gray-300'>Correo Electrónico</label>
                    <input type='email' id='correoElectronico' name='correoElectronico' value={formData.correoElectronico} onChange={handleInputChange} className='mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-coder-green focus:ring focus:ring-coder-green focus:ring-opacity-50 bg-[#282D34] text-white p-2 placeholder-white placeholder-opacity-25' placeholder='Dirección de correo electrónico' />
                </div>

                </div>
                {/* Campo Teléfono */}
                <div className='mb-4'>
                    <label htmlFor='telefono' className='block text-sm font-medium text-gray-300'>Teléfono/Móvil</label>
                    <input type='tel' id='telefono' name='telefono' value={formData.telefono} onChange={handleInputChange} className='mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-coder-green focus:ring focus:ring-coder-green focus:ring-opacity-50 bg-[#282D34] text-white p-2 placeholder-white placeholder-opacity-25' placeholder='Teléfono de contacto' />
                </div>
                {/* Campo Mensaje Corto */}
                <div className='mb-4'>
                    <label htmlFor='mensajeCorto' className='block text-sm font-medium text-gray-300'>Mensaje Corto</label>
                    <textarea id='mensajeCorto' name='mensajeCorto' rows={4} value={formData.mensajeCorto} onChange={handleInputChange} className='mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-coder-green focus:ring focus:ring-coder-green focus:ring-opacity-50 bg-[#282D34] text-white p-2 placeholder-white placeholder-opacity-25' placeholder='Descripción del proyecto o pregunta'></textarea>
                </div>
                {/* Campo Tipo de Proyecto */}
                {/*     <div className='mb-6'>
          <label htmlFor='tipoProyecto' className='block text-sm font-medium text-gray-300'>Tipo de Proyecto</label>
          <input type='text' id='tipoProyecto' name='tipoProyecto' value={formData.tipoProyecto} onChange={handleInputChange} className='mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-coder-green focus:ring focus:ring-coder-green focus:ring-opacity-50 bg-[#282D34] text-white p-2 placeholder-white placeholder-opacity-25' />
        </div> */}

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                    <p className='text-center text-coder-green mb-4 text-xl'>¡Mensaje enviado con éxito!</p>
                )}
                {submitStatus === 'error' && (
                    <p className='text-center text-red-500 mb-4 text-xl'>Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
                )}

                {/* Botón de Enviar - Deshabilitado mientras se envía */}
                <button
                    type='submit'
                    className={`mt-4 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black ${isSubmitting
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-coder-green hover:bg-[#00B86B]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coder-green`}
                    disabled={isSubmitting} // Deshabilita el botón durante el envío
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'} {/* Cambia el texto del botón */}
                    
                </button>
            </form>
        </div>
    );
}