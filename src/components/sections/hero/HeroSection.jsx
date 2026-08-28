import heroImage from "../../../assets/images/LifeBridge-1st-image.png";
import heroImageSmall from "../../../assets/images/LifeBridge-2nd-image.png";

export default function HeroSection() {
	return (
		<section id="home" className="overflow-x-hidden px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-2 [&>*]:min-w-0">

					<div className="relative z-20 pt-8 lg:pt-12 lg:scale-110 lg:origin-top-left">
						<h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1D2950] sm:text-4xl lg:text-[2.75rem]">
							Welcome to
							<br />
							LifeBridge{" "}
							<span className="relative inline-block">
								Healthcare
								<span
									aria-hidden="true"
									className="absolute -right-4 -top-3 text-lg font-normal leading-none text-[#0088FF] sm:-right-5 sm:-top-4 sm:text-xl"
								>
									✦
								</span>
							</span>
						</h1>

						<p className="relative z-30 mt-6 text-base font-bold leading-7 text-[#7783A1] sm:text-base sm:leading-8">
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

						<div className="relative z-10 mt-10 w-full max-w-[19rem]">
							<div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
								<img src={heroImageSmall} alt="Healthcare team with a patient" className="block h-auto w-full object-cover" />
							</div>
						</div>
					</div>

					<div className="relative z-0 w-full min-w-0 mt-8 lg:mt-28 lg:-translate-x-24 lg:self-start">
						<div className="overflow-hidden rounded-[2rem] bg-white">
							<img src={heroImage} alt="Doctor checking patient's blood pressure" className="block h-auto w-full object-cover" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}