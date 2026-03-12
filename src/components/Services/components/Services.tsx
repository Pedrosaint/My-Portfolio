import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-claude-bg">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title mb-4">
            My Services
          </h2>
          <p className="section-subtitle">
            Delivering high-quality web solutions with modern tools and best practices
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
