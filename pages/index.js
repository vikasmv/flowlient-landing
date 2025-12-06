import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Demo from "../components/Demo";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flowlient — The Chat-Native CRM</title>
        <meta name="description" content="Run your leads, bookings, customer communication, and operations entirely via chat. AI-powered, sector-ready CRM." />
      </Head>
      <Hero />
      <Features />
      <Pricing />
      <Demo />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
