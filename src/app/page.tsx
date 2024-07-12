import About from "@/src/components/About";
import CallToAction from "@/src/components/CallToAction";
import Clients from "@/src/components/Clients";
import ScrollUp from "@/src/components/Common/ScrollUp";
import Contact from "@/src/components/Contact";
import Faq from "@/src/components/Faq";
import Features from "@/src/components/Features";
import Hero from "@/src/components/Hero";
import Testimonials from "@/src/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MADESIGN",
  description: "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Contact />
      <Clients />
    </main>
  );
}
