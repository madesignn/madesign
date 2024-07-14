import SectionTitle from "../ui/SectionTitle";
import SingleServices from "./SingleServices";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Services"
          title="Explore Our Extensive Services"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        <div className="gap-5 mt-12 flex flex-wrap lg:mt-20">
          {servicesData.map((services, i) => (
            <SingleServices key={i} Service={services} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
