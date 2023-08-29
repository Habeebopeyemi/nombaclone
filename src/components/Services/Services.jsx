import React from "react";
import { services_data } from "../../data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-full p-3">
      <h2 className="text-[2rem] font-bold mb-10">
        Maximize business potentials with the right tools
      </h2>
      <div className="w-full md:flex justify-center gap-3 flex-wrap">
        {services_data.map((service) => (
          <ServiceCard
            key={service.key}
            title={service.title}
            image={service.image}
            description={service.description}
          >
            {service.action}
          </ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
