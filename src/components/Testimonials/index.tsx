import SectionTitle from "../Common/SectionTitle";
import { testimonialData } from '@/data/index'
import SingleTestimonial from "./SingleTestimonial";
import { clientsData } from "../Clients/clientsData";
import SingleClient from "../Clients/SingleClient";

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />
         <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
         <section className="pb-20 dark:bg-transparent">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
