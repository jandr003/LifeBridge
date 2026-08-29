export default function ServicesSection() {
	const services = [
		{
			title: "Inpatient Care",
			desc: "Round-the-clock monitoring and treatment for patients who need to stay for observation or recovery.",
			icon: (
				<path d="M4 20V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M4 20h16M4 20v-4h16v4M9 11h6M12 8v6" />
			),
		},
		{
			title: "Outpatient Services",
			desc: "Consultations, check-ups, and minor procedures without the need for an overnight stay.",
			icon: (
				<path d="M9 12h6M12 9v6M12 3a9 9 0 1 0 .01 0Z" />
			),
		},
		{
			title: "Medical & Surgical",
			desc: "Comprehensive diagnosis, treatment, and surgical care handled by experienced specialists.",
			icon: (
				<path d="M6 3v6a3 3 0 0 0 6 0V3M9 9v6a4 4 0 0 0 8 0v-1M18 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
			),
		},
		{
			title: "Diagnostic & Lab Tests",
			desc: "Accurate, timely lab work and imaging to support fast and reliable diagnoses.",
			icon: (
				<path d="M9 2h6M10 2v5l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V2" />
			),
		},
		{
			title: "Emergency & Instant Appointment",
			desc: "Urgent care and same-day scheduling when your health can't wait.",
			icon: (
				<path d="M12 8v4l3 3M12 2a10 10 0 1 0 .01 0Z" />
			),
		},
		{
			title: "Specialized Support",
			desc: "Dedicated care teams for chronic conditions, rehabilitation, and long-term patient support.",
			icon: (
				<path d="M20.8 8.6c0 5.6-8.8 10.4-8.8 10.4S3.2 14.2 3.2 8.6a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z" />
			),
		},
	];

	return (
		<section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				<div className="mx-auto max-w-2xl text-center">
					<span className="inline-block rounded-full bg-[#0088FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0088FF]">
						What We Offer
					</span>
					<h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl">
						Our Healthcare Services
					</h2>
					<p className="mt-4 leading-7 text-[#7783A1]">
						From routine checkups to specialized treatment, LifeBridge offers a full range of medical services built around your needs.
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.title}
							className="rounded-2xl bg-[#0088FF] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,136,255,0.5)]"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
									{service.icon}
								</svg>
							</div>
							<h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
							<p className="mt-2 leading-6 text-white/80">{service.desc}</p>
							<a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:gap-2">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}