import Navbar from "../components/ui/navigation/Navbar";
import HeroSection from "../components/sections/hero/HeroSection";
import AboutSection from "../components/sections/about/AboutSection";
import ServicesSection from "../components/sections/services/ServicesSection";
import TeamSection from "../components/sections/team/TeamSection";
import BlogSection from "../components/sections/blog/BlogSection";
import TestimonialsSection from "../components/sections/testimonials/TestimonialsSection";
import ContactSection from "../components/sections/contact/ContactSection";
import FaqSection from "../components/sections/faq/FaqSection";
import FooterSection from "../components/sections/footer/FooterSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<Navbar />
			<main>
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<TeamSection />
				<BlogSection />
				<TestimonialsSection />
				<ContactSection />
				<FaqSection />
			</main>
			<FooterSection />
		</div>
	);
}