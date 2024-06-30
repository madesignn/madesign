import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";

import PricingPage from "@/components/PricingPage";
import Experience from "@/components/Experience";
import Navigation  from "@/components/Navigation";
import Hero2 from "@/components/Hero";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <Navigation />
      <Hero2 />
      <RecentProjects />
      <Clients />
      <Experience />
      <PricingPage />
      <Footer />
      </div>
    </main>
  );
}