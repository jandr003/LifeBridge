import heroImage from "../../../assets/images/LifeBridge-1st-image.png";
import heroImageSmall from "../../../assets/images/LifeBridge-2nd-image.png";

export default function HeroSection() {
	return (
		<>
			<section id="home" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-2 [&>*]:min-w-0">

						<div className="relative z-20 flex flex-col gap-8 pt-8 lg:gap-16 lg:pt-12 lg:scale-110 lg:origin-top-left">
							<div>
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

								<p className="relative z-30 mt-6 text-base font-normal leading-7 text-[#1D2950] sm:text-base sm:leading-7">
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
							</div>

							<div className="relative z-10 w-full max-w-[24rem] lg:max-w-[26rem]">
								<div className="overflow-hidden rounded-[2rem] bg-white">
									<img src={heroImageSmall} alt="Healthcare team with a patient" className="block h-auto w-full object-cover" />
								</div>
							</div>
						</div>

						<div className="relative z-0 w-full min-w-0 mt-16 lg:mt-[119px] lg:-translate-x-24 lg:self-start lg:h-[500px]">
							<div className="overflow-hidden rounded-[2rem] bg-white lg:absolute lg:top-0 lg:left-0 lg:w-[44rem]">
								<img src={heroImage} alt="Doctor checking patient's blood pressure" className="block h-auto w-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white">
				<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
					<p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#1D2950]">
						Trusted by leading healthcare partners
					</p>

					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="12" r="10.5" fill="none" stroke="#1D2950" strokeWidth="1.2" />
								<path d="M6 15c2-1.5 4-1.5 6 0s4 1.5 6 0" stroke="#F5B400" strokeWidth="1.8" strokeLinecap="round" fill="none" />
								<path d="M6 17c2-1.5 4-1.5 6 0s4 1.5 6 0" stroke="#0088FF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
								<path d="M9 6h6l-0.7 8.5c-0.1 1-1 1.5-2.3 1.5s-2.2-0.5-2.3-1.5L9 6Z" fill="#E4222C" />
								<path d="M12 7.4v6" stroke="#fff" strokeWidth="1" />
								<circle cx="12" cy="9" r="1" fill="#fff" />
							</svg>
							<span className="font-serif text-lg font-semibold tracking-tight text-[#1D2950]">
								St. Luke's <span className="font-normal text-gray-400">Medical</span>
							</span>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<defs>
									<linearGradient id="medicareplusGradient" x1="2" y1="18" x2="22" y2="4" gradientUnits="userSpaceOnUse">
										<stop offset="0%" stopColor="#F5484B" />
										<stop offset="45%" stopColor="#FF9A3D" />
										<stop offset="75%" stopColor="#3DBEEF" />
										<stop offset="100%" stopColor="#2E6FE0" />
									</linearGradient>
								</defs>
								<path
									d="M21 4c-3.5 1-6.5 3-8.5 6.5C11 13 9 15 6 16c3.2.4 6-.4 8.3-2.3-2 2.6-5 4.3-8.3 4.8 3.8.8 7.6-.2 10.4-2.6C18.8 13.8 20.5 9.5 21 4Z"
									fill="url(#medicareplusGradient)"
								/>
							</svg>
							<span className="text-lg font-extrabold text-[#1D2950]">
								medicare<span className="font-normal text-[#0088FF]">plus</span>
							</span>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="20" height="24" viewBox="0 0 24 28" fill="none">
								<circle cx="16" cy="4" r="3" fill="#1D2950" />
								<path d="M16 8c-2.8 0-5 2-5 4.5V19h2.2v9h5.6v-9H21v-6.5C21 10 18.8 8 16 8Z" fill="#1D2950" />
								<circle cx="7" cy="9" r="2.4" fill="#F5B400" />
								<path d="M7 12.4c-2.2 0-4 1.6-4 3.6V21h1.8v7h4.4v-7H11v-5c0-2-1.8-3.6-4-3.6Z" fill="#F5B400" />
								<rect x="9.5" y="15" width="2" height="3.5" fill="#1D2950" />
							</svg>
							<div className="leading-tight">
								<div className="text-lg font-bold tracking-tight text-[#1D2950]">PhilHealth</div>
							</div>
						</div>

						<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D2950" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 3v6a3 3 0 0 0 6 0V3" />
								<path d="M8 12v2a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-1.5" />
								<circle cx="20" cy="6" r="2" />
								<circle cx="14" cy="20" r="2" fill="#1D2950" />
							</svg>
							<span className="font-serif text-lg font-bold italic tracking-tight text-[#1D2950]">Maxicare</span>
						</div>

			
						<div className="flex items-center gap-x-10 gap-y-6">
							<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
									<rect x="9" y="2" width="6" height="20" rx="1" fill="#E4222C" />
									<rect x="2" y="9" width="20" height="6" rx="1" fill="#E4222C" />
								</svg>
								<span className="font-serif text-lg font-semibold italic text-[#1D2950]">Red Cross PH</span>
							</div>

							<div className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="13" r="9" fill="#0088FF" />
									<path d="M12 4a9 9 0 0 0-6.4 15.4A9 9 0 0 0 12 22V4Z" fill="#4CAF50" />
									<circle cx="12" cy="13" r="9" fill="none" stroke="#0088FF" strokeWidth="1.6" />
									<rect x="9.8" y="2" width="4.4" height="3.2" rx="0.4" fill="#fff" stroke="#0088FF" strokeWidth="1.2" />
									<path d="M10.5 5.2 8 14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
									<path d="M13.5 5.2 16 14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
									<circle cx="8.5" cy="17.5" r="1.6" fill="#fff" stroke="#0088FF" strokeWidth="1" />
									<path d="M9.5 17.5h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
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