export default function HeroSection() {
	return (
		<section id="home" className="flex min-h-[calc(100vh-88px)] items-center px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					<h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1D2950] sm:whitespace-nowrap sm:text-6xl">
						Welcome to LifeBridge Healthcare
					</h1>
					<p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#7783a1] sm:text-lg">
						Our healthcare team provides comprehensive, patient-centered care combining expertise and compassion tailored to your needs.
					</p>
					<div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
						<a
							className="inline-flex min-w-[12.5rem] items-center justify-center rounded-lg bg-[#0088FF] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0075db]"
							href="#services"
						>
							View Services
						</a>
						<a
							className="inline-flex min-w-64 items-center justify-center rounded-lg border-2 border-[#0BE7FF] px-8 py-4 text-sm font-bold text-[#00cce5] transition hover:bg-[#0BE7FF]/10"
							href="#contact"
						>
							Book an Appointment
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

