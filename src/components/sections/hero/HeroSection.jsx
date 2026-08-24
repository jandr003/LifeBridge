import firstImage from "../../../assets/images/LifeBridge-1st-image.png";
import secondImage from "../../../assets/images/LifeBridge-2nd-image.png";

export default function HeroSection() {
	return (
		<section id="home" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pt-6">
			<div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
				<div className="pt-2 lg:pt-8">
					<h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#1D2950] sm:text-7xl">
						Welcome to
						<br />
						<span className="relative inline-block">
							LifeBridge Healthcare
							<span aria-hidden="true" className="absolute -right-7 -top-5 text-5xl font-normal leading-none text-[#0088FF] sm:-right-10 sm:-top-7 sm:text-6xl">
								✦
							</span>
						</span>
					</h1>
					<p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#7783A1] sm:text-[1.08rem]">
						Our healthcare team provides comprehensive, patient-centered care combining expertise and compassion tailored to your needs.
					</p>
					<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
						<a
							className="inline-flex min-w-[10.5rem] items-center justify-center rounded-xl bg-[#0088FF] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#0075DB]"
							href="#services"
						>
							View Services
						</a>
						<a
							className="inline-flex min-w-[16rem] items-center justify-center rounded-xl border-2 border-[#0BE7FF] px-8 py-3 text-base font-semibold text-[#00CCE5] transition hover:bg-[#0BE7FF]/10"
							href="#contact"
						>
							Book an Appointment
						</a>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-[35rem] lg:mt-0">
					<div className="overflow-hidden rounded-[2.25rem] border-8 border-[#ECF5FF] bg-white shadow-sm">
						<img alt="Doctor checking a patient's blood pressure" className="h-[33rem] w-full object-cover object-center" src={firstImage} />
					</div>

					<div className="absolute -bottom-6 -left-20 hidden w-[18rem] overflow-hidden rounded-[2rem] border-8 border-[#ECF5FF] bg-white shadow-sm xl:block">
						<img alt="Healthcare team with a patient" className="h-[17rem] w-full object-cover" src={secondImage} />
					</div>
				</div>
			</div>
		</section>
	);
}
