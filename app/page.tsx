import Header from "@/Components/landing/Header";
import Hero from "@/Components/landing/Hero";
import Feature from "@/Components/landing/Feature";
import How_to_work from "@/Components/landing/How_to_work";
import Perview from "@/Components/landing/Perview";
import Testimonial from "@/Components/landing/Testimonial";
import FAQ from "@/Components/landing/Faq";
import Footer from "@/Components/landing/Footer";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Feature />
      <How_to_work />
      <Perview />
      <Testimonial />
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}
