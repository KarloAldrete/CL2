import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>CoderLabs</title>
        <meta
          name="description"
          content="CoderLabs is a software development agency"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Services"
        title="What problems do our services solve?">
        Our services address software development challenges, specializing in custom solutions, system improvements, and expert consulting.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        We've compiled answers to some of the most common questions our clients ask us. This will help you understand our services better and make informed decisions.
      </SectionTitle>
      <Faq />
      <Footer />
    </>
  );
}

export default Home;