import ContactForm from '@/components/landing-sections/ContactForm';
import Hero from '@/components/landing-sections/Hero';
import AIsection from '@/components/landing-sections/AIsection';
import MarcasSection from '@/components/landing-sections/MarcasSection';
import ProcesoSection from '@/components/landing-sections/ProcesoSection';
import ServiciosSection from '@/components/landing-sections/ServiciosSection';
import FAQSection from '@/components/landing-sections/FAQSection';
import {
  IconCode, IconAi, IconMessage, IconBrain,
  IconBrandFacebookFilled, IconBrandInstagramFilled, IconBrandYoutubeFilled, IconBrandTiktokFilled
} from '@tabler/icons-react';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosSection />  
      <ProcesoSection />
      <MarcasSection  />
      <AIsection />
      <FAQSection />

      <section className='w-full flex flex-col justify-center items-center'>
        <h2 className='text-center mb-8'>Contacto</h2>
        <ContactForm />
        <div className='flex gap-4 justify-center items-center mt-12 mb-4'>
          <IconBrandFacebookFilled color='white' size={32} />
          <IconBrandInstagramFilled color='white' size={32} />
          <IconBrandYoutubeFilled color='white' size={32} />
          <IconBrandTiktokFilled color='white' size={32} />
        </div>
        <h3 className='text-2xl text-center'>Siguenos en nuestras redes sociales</h3>
      </section>
    </>
  );
}