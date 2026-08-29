import heroImage from "../../../assets/images/LifeBridge-1st-image.png";
import heroImageSmall from "../../../assets/images/LifeBridge-2nd-image.png";

export default function HeroSection() {
	return (
		<>
			<section id="home" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-2 [&>*]:min-w-0">

						<div className="relative z-20 pt-8 lg:pt-12 lg:scale-110 lg:origin-top-left">
							<h1
								className="text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl lg:text-[3.25rem]"
								style={{ lineHeight: 1.05 }}
							>
								Welcome to
								<br />
								LifeBridge{" "}
								Healthcar
								<span className="relative inline-block">
									e
									<span
										aria-hidden="true"
										className="absolute -right-2 -top-1 rotate-12 text-2xl font-normal leading-none text-[#0088FF] sm:-right-3 sm:-top-2 sm:text-3xl"
									>
										✦
									</span>
								</span>
							</h1>

							<p className="relative z-30 mt-6 text-lg font-bold leading-7 text-[#7783A1] sm:text-lg sm:leading-8">
								Our healthcare team provides comprehensive, patient-centered care combining expertise and compassion tailored to your needs.
							</p>

							<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
								<a href="#services" className="inline-flex min-w-[11rem] items-center justify-center whitespace-nowrap rounded-xl bg-[#0088FF] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#0075DB]">
									View Services
								</a>

								<a href="#contact" className="inline-flex min-w-[15rem] items-center justify-center whitespace-nowrap rounded-xl border-2 border-[#0BE7FF] px-8 py-3.5 text-base font-semibold text-[#00CCE5] transition hover:bg-[#0BE7FF]/10">
									Book an Appointment
								</a>
							</div>

							<div className="relative z-10 mt-10 w-full max-w-[24rem] lg:max-w-[26rem]">
								<div className="overflow-hidden rounded-[2rem] bg-white">
									<img src={heroImageSmall} alt="Healthcare team with a patient" className="block h-auto w-full object-cover" />
								</div>
							</div>
						</div>

						<div className="relative z-0 w-full min-w-0 mt-16 lg:mt-[138px] lg:-translate-x-24 lg:self-start lg:h-[500px]">
							<div className="overflow-hidden rounded-[2rem] bg-white lg:absolute lg:top-0 lg:left-0 lg:w-[44rem]">
								<img src={heroImage} alt="Doctor checking patient's blood pressure" className="block h-auto w-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-y border-gray-200 bg-white">
				<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
					<p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#7783A1]">
						Trusted by leading healthcare partners
					</p>

					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="12" r="10" fill="#1D2950" />
								<path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="1.6" />
							</svg>
							<span className="font-serif text-lg font-semibold tracking-tight text-[#1D2950]">
								St. Luke's <span className="font-normal text-gray-400">Medical</span>
							</span>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
								<path d="M12 21s-7-4.35-9.5-8.8C.7 8.6 2.6 5 6.2 5c2 0 3.4 1.1 4.3 2.4C11.4 6.1 12.8 5 14.8 5c3.6 0 5.5 3.6 3.7 7.2C16 16.65 12 21 12 21z" fill="#0088FF" />
							</svg>
							<span className="text-lg font-extrabold text-[#1D2950]">
								medicare<span className="font-normal text-[#0088FF]">plus</span>
							</span>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
								<rect x="4" y="10" width="6" height="10" rx="1" fill="#1D2950" />
								<rect x="14" y="4" width="6" height="16" rx="1" fill="#0088FF" />
							</svg>
							<div className="leading-tight">
								<div className="text-lg font-bold tracking-tight text-[#1D2950]">PhilHealth</div>
							</div>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D2950" strokeWidth="1.6">
								<path d="M6 3v9a4 4 0 0 0 8 0V3" />
								<circle cx="18" cy="6" r="2" fill="#1D2950" stroke="none" />
							</svg>
							<span className="text-lg font-bold tracking-wide text-[#1D2950]">MAXICARE</span>
						</div>

						{/* Grouped so these two always stay together and wrap as one unit */}
						<div className="flex items-center gap-x-10 gap-y-6">
							<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
									<rect x="9" y="2" width="6" height="20" rx="1" fill="#E4222C" />
									<rect x="2" y="9" width="20" height="6" rx="1" fill="#E4222C" />
								</svg>
								<span className="font-serif text-lg font-semibold italic text-[#1D2950]">Red Cross PH</span>
							</div>

							<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0088FF" strokeWidth="1.6">
									<path d="M9 2h6M10 2v5l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V2" />
								</svg>
								<span className="text-lg font-bold lowercase tracking-tight text-[#1D2950]">
									healthlink<span className="font-normal text-gray-400">labs</span>
								</span>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	);
}