export default function CtaSection() {
	return (
		<section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
			<div
				className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center rounded-3xl bg-[#0088FF] px-6 text-center"
				style={{ height: "400px" }}
			>
				<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
					Trusted Healthcare For Every Patient
				</h2>
				<p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
					We value the experiences shared by our patients regarding the care they receive at LifeBridge
					Healthcare. Below are some of the recent feedback and testimonials from our patients.
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
					<button className="rounded-lg bg-[#4DE8F5] px-7 py-3 text-sm font-semibold text-[#003A66] shadow-sm shadow-[#4DE8F5]/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-[#2FDCEE] hover:shadow-md hover:shadow-[#4DE8F5]/30 active:scale-95 active:translate-y-0">
						View Services
					</button>
					<button className="rounded-lg border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0088FF]">
						Book an Appointment
					</button>
				</div>
			</div>
		</section>
	);
}