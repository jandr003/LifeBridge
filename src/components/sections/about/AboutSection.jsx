import aboutImage from "../../../assets/images/LifeBridge-3rd-image.png";

export default function AboutSection() {
	const values = [
		{
			title: "Compassion",
			desc: "We treat people with kindness, patience, and respect.",
		},
		{
			title: "Integrity",
			desc: "We act with honesty, take responsibility for our work, and follow professional standards.",
		},
		{
			title: "Excellence",
			desc: "We aim for high standards in everything we do and look for ways to improve.",
		},
		{
			title: "Patient-Centered Care",
			desc: "We listen to our patients and consider their needs when making decisions.",
		},
	];

	return (
		<section id="about" className="bg-[#66BFFF] px-4 py-32 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				<div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">

					<div>
						<img
							src={aboutImage}
							alt="LifeBridge medical professionals working together"
							className="block h-auto w-full"
						/>
					</div>

					<div className="flex flex-col justify-center">
						<span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#0072E0]">
							Who We Are
						</span>

						<h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#1D2950] sm:text-5xl" style={{ lineHeight: 1.15 }}>
							Quality Healthcare You Can Rely On
						</h2>

						<p className="mt-5 text-lg leading-8 text-[#1D2950]/70">
							LifeBridge Healthcare provides medical services for individuals and families. We are committed to providing reliable and professional care in a safe and respectful environment.
						</p>
					</div>

					<div className="mt-4 flex flex-wrap justify-center gap-6 lg:col-span-2 lg:mt-8">
					<div className="flex h-[175px] w-full max-w-[450px] flex-col rounded-2xl bg-white p-5 shadow-[0_20px_45px_-20px_rgba(9,30,66,0.35)]">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#66BFFF]/15 text-[#0072E0]">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M2 12h4l2-6 4 12 2-6h8" />
								</svg>
							</div>
							<h3 className="text-base font-bold text-[#1D2950]">Our Mission</h3>
						</div>
						<p className="mt-3 text-base leading-7 text-[#7783A1]">
							To provide accessible healthcare services and dependable medical care that address the needs of our patients.
						</p>
					</div>

					<div className="flex h-[175px] w-full max-w-[450px] flex-col rounded-2xl bg-white p-5 shadow-[0_20px_45px_-20px_rgba(9,30,66,0.35)]">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#66BFFF]/15 text-[#0072E0]">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M2 20 9 9l4 4 4-6 5 13" />
									<circle cx="18" cy="5" r="2" />
								</svg>
							</div>
							<h3 className="text-base font-bold text-[#1D2950]">Our Vision</h3>
						</div>
						<p className="mt-3 text-base leading-7 text-[#7783A1]">
							To become a trusted healthcare provider known for consistent service, professional standards, and patient satisfaction.
						</p>
					</div>
				</div>

				</div>

				<div className="mt-16 text-center">
					<span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0072E0]">
						What Drives Us
					</span>
					<h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1D2950] sm:text-3xl">
						Our Core Values
					</h3>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((value, i) => (
						<div
							key={value.title}
							className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_-20px_rgba(9,30,66,0.35)] transition hover:-translate-y-1"
						>
							<div className="flex items-center gap-2">
								<span className="text-sm font-bold text-[#0072E0]">0{i + 1}</span>
								<h4 className="text-sm font-bold text-[#1D2950]">{value.title}</h4>
							</div>
							<p className="mt-2 text-sm leading-6 text-[#7783A1]">{value.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-24 overflow-hidden rounded-[2rem] bg-[#1D2950] px-8 py-10 text-center sm:px-16">
					<p className="text-sm font-bold uppercase tracking-widest text-[#66BFFF]">
						Our Commitment
					</p>
					<p className="mx-auto mt-4 max-w-2xl text-xl leading-9 text-white/85">
						At LifeBridge Healthcare, we are committed to maintaining high standards in the way we deliver our services. We value professionalism, clear communication, and responsible practice in every aspect of our work.
					</p>
				</div>

			</div>
		</section>
	);
}