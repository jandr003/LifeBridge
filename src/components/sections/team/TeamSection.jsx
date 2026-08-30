import { useRef, useState, useEffect } from "react";
import team1 from "../../../assets/images/LBridge-TEAM1.png";
import team2 from "../../../assets/images/LBridge-TEAM2.png";
import team3 from "../../../assets/images/LBridge-TEAM3.png";
import team4 from "../../../assets/images/LBridge-TEAM4.png";
import team5 from "../../../assets/images/LBridge-TEAM5.png";

export default function TeamSection() {
	const scrollRef = useRef(null);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const team = [
		{ name: "Dr. Ethan Collins", role: "Cardiologist", photo: team1 },
		{ name: "Dr. Arisa Kato", role: "Dermatologist", photo: team2 },
		{ name: "Dr. Daniel Hayes", role: "Orthopedic Surgeon", photo: team3 },
		{ name: "Dr. Maria Lopez", role: "Pediatrician", photo: team4 },
		{ name: "Dr. Samuel Reyes", role: "General Physician", photo: team5 },
	];

	const checkScrollPosition = () => {
		const el = scrollRef.current;
		if (!el) return;
		setAtStart(el.scrollLeft <= 4);
		setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
	};

	useEffect(() => {
		checkScrollPosition();
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", checkScrollPosition);
		window.addEventListener("resize", checkScrollPosition);
		return () => {
			el.removeEventListener("scroll", checkScrollPosition);
			window.removeEventListener("resize", checkScrollPosition);
		};
	}, []);

	const scroll = (direction) => {
		if (!scrollRef.current) return;
		const amount = 280;
		scrollRef.current.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<section id="team" className="bg-[#66BFFF] px-4 py-32 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				<div className="flex items-start justify-between gap-6">
					<div>
						<span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#0072E0]">
							Our Team
						</span>

						<h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-5xl" style={{ lineHeight: 1.15 }}>
							Professional and Experienced Medical Team
						</h2>

						<p className="mt-5 max-w-xl text-lg leading-8 text-[#FFFFFF]/70">
							Our doctors and specialists are experienced professionals dedicated to providing quality medical care to every patient.
						</p>
					</div>

					<div className="hidden flex-none items-center gap-2 sm:flex">
						<button
							type="button"
							onClick={() => scroll("left")}
							disabled={atStart}
							aria-label="Previous"
							className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition ${
								atStart ? "bg-white/20 cursor-not-allowed" : "bg-[#0088FF] hover:bg-[#0075DB]"
							}`}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M19 12H5M11 6l-6 6 6 6" />
							</svg>
						</button>
						<button
							type="button"
							onClick={() => scroll("right")}
							disabled={atEnd}
							aria-label="Next"
							className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition ${
								atEnd ? "bg-white/20 cursor-not-allowed" : "bg-[#0088FF] hover:bg-[#0075DB]"
							}`}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</button>
					</div>
				</div>

				<div
					ref={scrollRef}
					className="mt-14 flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					{team.map((member) => (
						<div key={member.name} className="w-96 flex-none text-center">
							<img
								src={member.photo}
								alt={member.name}
								className="block h-auto w-full"
							/>
							<h3 className="mt-4 text-base font-bold text-[#FFFFFF]">{member.name}</h3>
							<p className="mt-1 text-sm text-[#FFFFFF]">{member.role}</p>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}