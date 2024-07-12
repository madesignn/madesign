import About from "@/src/components/About";
import Breadcrumb from "@/src/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | MADESIGN",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
    </main>
  );
};

export default AboutPage;
