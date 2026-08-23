import Navbar from "../components/ui/navigation/Navbar";
import HeroSection from "../components/sections/hero/HeroSection";
import AboutSection from "../components/sections/about/AboutSection";
import ServicesSection from "../components/sections/services/ServicesSection";
import TeamSection from "../components/sections/team/TeamSection";
import BlogSection from "../components/sections/blog/BlogSection";
import ContactSection from "../components/sections/contact/ContactSection";
import FooterSection from "../components/sections/footer/FooterSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<Navbar />
			<main>
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<TeamSection />
				<BlogSection />
				<ContactSection />
			</main>
			<FooterSection />
		</div>
	);
}

