import Breadcrumb from "@/src/components/ui/Breadcrumb";
import Testimonials from "@/src/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Projects | MADESIGN",
  description: "This is About page description",
};

const ProjectsPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Projects Page" />
      <Testimonials />
    </main>
  );
};

export default ProjectsPage;
