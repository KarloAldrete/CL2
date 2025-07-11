import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CoderLabs",
  description: "Transformamos tus ideas en aplicaciones web robustas y escalables para empresas de todos los tamaños, hacemos que la tecnología trabaje para ti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='container px-4 xl:px-0 mx-auto max-w-7x overflow-hidden min-h-screen flex flex-col'>
          <div
            className="absolute w-full h-[400px] top-[-250px] transform -translate-x-1/2 z-[-1] sm:w-[600px] sm:h-[600px] sm:top-[-350px] md:w-[750px] md:h-[750px] md:top-[-620px]"
            style={{
              left: 'calc(50% + 0.5px)',
              background: 'radial-gradient(50% 50% at 50% 50%, #17FF9F 0%, #000000 100%)',
              filter: 'blur(280px)',
            }}
          />

          {/* --- Header Menu --- */}
          <Header />
          <main className="flex-grow">
            {children} {/* Aquí se renderiza el contenido de tus páginas */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}