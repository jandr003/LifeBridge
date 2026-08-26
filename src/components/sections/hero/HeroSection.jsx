export default function HeroSection() {
	return (
		<section
			id="home"
			className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14"
		>
			<div className="mx-auto max-w-6xl">
				{/* TEXT */}
				<div className="pt-8 lg:pt-12">
					<h1 className="text-5xl font-extrabold leading-[1.06] tracking-tight text-[#1D2950] sm:text-6xl lg:text-[4.6rem]">
						Welcome to
						<br />
						<span className="relative inline-block">
							LifeBridge Healthcare
							<span
								aria-hidden="true"
								className="absolute -right-8 -top-6 text-5xl font-normal leading-none text-[#0088FF] sm:-right-10 sm:-top-7 sm:text-6xl"
							>
								✦
							</span>
						</span>
					</h1>

					<p className="mt-6 max-w-[38rem] text-base font-medium leading-7 text-[#7783A1] sm:text-[1.05rem] sm:leading-8">
						Our healthcare team provides comprehensive, patient-centered care
						combining expertise and compassion tailored to your needs.
					</p>

					<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
						<a
							href="#services"
							className="inline-flex min-w-[11rem] items-center justify-center rounded-xl bg-[#0088FF] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#0075DB]"
						>
							View Services
						</a>

						<a
							href="#contact"
							className="inline-flex min-w-[15rem] items-center justify-center rounded-xl border-2 border-[#0BE7FF] px-8 py-3.5 text-base font-semibold text-[#00CCE5] transition hover:bg-[#0BE7FF]/10"
						>
							Book an Appointment
						</a>
					</div>
				</div>

				{/* IMAGE */}
				<div className="mt-16 flex w-full justify-center lg:mt-20">
					<div className="w-full max-w-[40rem]">
						<div className="overflow-hidden rounded-[2.75rem] border-[7px] border-[#ECF5FF] bg-white">
							<img
								src="/images/LifeBridge-2nd-image.png"
								alt="Healthcare team with a patient"
								className="block h-auto w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}