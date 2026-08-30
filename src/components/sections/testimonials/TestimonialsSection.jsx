export default function TestimonialsSection() {
	const testimonialsTop = [
		{
			name: "Ethan Castillo",
			rating: 4,
			avatar: "https://i.pravatar.cc/150?img=12",
			quote: "The check-in process was quick, and the doctor took the time to actually explain my results instead of rushing through them. It's rare to find that level of attentiveness these days.",
		},
		{
			name: "Rafael Mendoza",
			rating: 5,
			avatar: "https://i.pravatar.cc/150?img=33",
			quote: "I've been coming here for routine checkups for the past year. The billing is transparent, appointments run on schedule, and the nurses remember details from previous visits.",
		},
		{
			name: "Isabel Fernandez",
			rating: 5,
			avatar: "https://i.pravatar.cc/150?img=44",
			quote: "My father needed a specialist referral and the front desk handled it within the same day. Communication between departments here is better than most clinics I've dealt with.",
		},
		{
			name: "Daniel Cruz",
			rating: 4,
			avatar: "https://i.pravatar.cc/150?img=68",
			quote: "Clean facility, reasonable wait times, and the physician actually listened before prescribing anything. I switched from my old provider and haven't looked back since.",
		},
		{
			name: "Patricia Villanueva",
			rating: 3,
			avatar: "https://i.pravatar.cc/150?img=29",
			quote: "Overall a solid experience. The lab results took a bit longer than expected, but the follow-up call to walk me through them made up for it.",
		},
	];

	const testimonialsBottom = [
		{
			name: "Marco Aquino",
			rating: 5,
			avatar: "https://i.pravatar.cc/150?img=52",
			quote: "Booked an appointment online and got confirmation within minutes. The physical therapist adjusted my recovery plan twice based on how I was progressing, which I appreciated.",
		},
		{
			name: "Julia Santos",
			rating: 4,
			avatar: "https://i.pravatar.cc/150?img=9",
			quote: "Brought my mother in for a cardiology consult. The cardiologist walked us through every test result in plain language, no medical jargon we had to guess at.",
		},
		{
			name: "Benjamin Torres",
			rating: 5,
			avatar: "https://i.pravatar.cc/150?img=53",
			quote: "What stood out to me was how organized everything was, from intake forms to insurance verification. Made an otherwise stressful visit much easier to get through.",
		},
		{
			name: "Sofia Ramirez",
			rating: 3,
			avatar: "https://i.pravatar.cc/150?img=20",
			quote: "The consultation itself was thorough, though the parking situation could use some improvement. Would still recommend based on the quality of care alone.",
		},
		{
			name: "Gabriel Domingo",
			rating: 4,
			avatar: "https://i.pravatar.cc/150?img=59",
			quote: "Had a minor procedure done here and the nursing staff kept me informed at every stage. Follow-up instructions were clear and they called two days later to check in.",
		},
	];

	const Card = ({ t }) => (
		<div className="group relative w-[520px] flex-none rounded-2xl border border-[#E4EAF5] bg-white p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#66BFFF] hover:shadow-xl hover:shadow-[#66BFFF]/20">
			<svg className="absolute right-10 top-10 text-[#66BFFF]" width="40" height="30" viewBox="0 0 32 24" fill="currentColor">
				<path d="M0 24V13.5C0 6 4.5 1 12 0l1.5 4.5C9 6 7 8.5 7 12h6v12H0Zm18 0V13.5C18 6 22.5 1 30 0l1.5 4.5C27 6 25 8.5 25 12h6v12H18Z" />
			</svg>
			<div className="flex items-center gap-5">
				<img src={t.avatar} alt={t.name} className="h-16 w-16 flex-none rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-[#66BFFF]" />
				<div>
					<h3 className="text-xl font-bold text-[#1D2950]">{t.name}</h3>
					<div className="mt-1.5 flex gap-1">
						{Array.from({ length: 5 }).map((_, i) => (
							<svg key={i} width="18" height="18" viewBox="0 0 20 20" fill={i < t.rating ? "#0088FF" : "#D6E6FA"}>
								<path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
							</svg>
						))}
					</div>
				</div>
			</div>
			<p className="mt-6 text-base leading-8 text-[#7783A1]">{t.quote}</p>
		</div>
	);

	const rowTop = [...testimonialsTop, ...testimonialsTop];
	const rowBottom = [...testimonialsBottom, ...testimonialsBottom];

	return (
		<section className="overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
			<style>{`
				@keyframes marquee-right {
					from { transform: translateX(-50%); }
					to { transform: translateX(0%); }
				}
				@keyframes marquee-left {
					from { transform: translateX(0%); }
					to { transform: translateX(-50%); }
				}
				.marquee-row {
					animation-timing-function: linear;
					animation-iteration-count: infinite;
				}
				.marquee-right { animation-name: marquee-right; animation-duration: 70s; }
				.marquee-left { animation-name: marquee-left; animation-duration: 70s; }
				.marquee-row:hover { animation-play-state: paused; }

				.marquee-mask {
					-webkit-mask-image: linear-gradient(
						to right,
						transparent 0%,
						black 15%,
						black 85%,
						transparent 100%
					);
					mask-image: linear-gradient(
						to right,
						transparent 0%,
						black 15%,
						black 85%,
						transparent 100%
					);
				}
			`}</style>

			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl">
						What Our Patients Say About Us
					</h2>
					<p className="mt-4 leading-7 text-[#7783A1]">
						We are pleased to see that our patients share their experiences with the care they received at LifeBridge Healthcare. Below, you will find wonderful comments we have received in recent times.
					</p>
				</div>
			</div>

			<div className="mt-14 marquee-mask overflow-hidden py-4">
				<div className="flex gap-6 marquee-row marquee-right w-max">
					{rowTop.map((t, i) => (
						<Card t={t} key={`top-${i}`} />
					))}
				</div>
			</div>

			<div className="mt-6 marquee-mask overflow-hidden py-4">
				<div className="flex gap-6 marquee-row marquee-left w-max">
					{rowBottom.map((t, i) => (
						<Card t={t} key={`bottom-${i}`} />
					))}
				</div>
			</div>
		</section>
	);
}