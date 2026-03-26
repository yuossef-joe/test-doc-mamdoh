import {
  HeroSection,
  AboutSection,
  ServicesOverview,
  TestimonialsSection,
  FAQsSection,
  ContactSection,
} from "@/components/home";
import {
  doctorProfile,
  services,
  testimonials,
  faqs,
  clinicInfo,
} from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection bio={doctorProfile.bio} photoUrl={doctorProfile.photo} />
      <ServicesOverview services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQsSection faqs={faqs} />
      <ContactSection
        address={clinicInfo.address}
        phone={clinicInfo.phone}
        email={clinicInfo.email}
        workingHours="Sun - Thu: 9:00 AM - 9:00 PM"
      />
    </>
  );
}
