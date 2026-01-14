import AuthorSpotlight from "@/components/Landing/AuthorSpotlight";
import FAQ from "@/components/Landing/FAQ";
import FeaturedCategories from "@/components/Landing/FeaturedCategories";
import Hero from "@/components/Landing/Hero";
import Newsletter from "@/components/Landing/Newsletter";
import Testimonials from "@/components/Landing/Testimonials";
import WhyChooseUs from "@/components/Landing/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedCategories></FeaturedCategories>
      <WhyChooseUs></WhyChooseUs>
      <AuthorSpotlight></AuthorSpotlight>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </div>
  );
}
