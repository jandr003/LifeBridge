export default function HeroSection() {
	return (
		<section id="home" className="flex min-h-[calc(100vh-88px)] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#0088FF]">
					LifeBridge Healthcare
				</p>
				<h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
					Welcome to <span className="text-[#0088FF]">LifeBridge Healthcare</span>
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
					Our healthcare team provides comprehensive, patient-centered care combining expertise and compassion tailored to your needs.
				</p>
				<div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						className="inline-flex min-w-40 items-center justify-center rounded-full bg-[#0088FF] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#0075db]"
						href="#services"
					>
						View Services
					</a>
					<a
						className="inline-flex min-w-52 items-center justify-center rounded-full border-2 border-[#0BE7FF] px-7 py-3.5 text-sm font-bold text-[#0088FF] transition hover:bg-[#0BE7FF]/10"
						href="#contact"
					>
						Book an Appointment
					</a>
				</div>
			</div>
		</section>
	);
}

