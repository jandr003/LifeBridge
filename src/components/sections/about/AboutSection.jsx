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
		<section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">


				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div>
						<img
							src={aboutImage}
							alt="LifeBridge medical professionals working together"
							className="block h-auto w-full"
						/>
					</div>

					<div>
						<span className="inline-block rounded-full bg-[#0088FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0088FF]">
							About Us
						</span>

						<p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#7783A1]">
							Who We Are
						</p>

						<h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl" style={{ lineHeight: 1.15 }}>
							Quality Healthcare You Can Rely On
						</h2>

						<p className="mt-5 leading-7 text-[#7783A1]">
							LifeBridge Healthcare provides medical services for individuals and families. We are committed to providing reliable and professional care in a safe and respectful environment.
						</p>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div className="rounded-2xl border border-[#E4EAF5] bg-white p-8 shadow-[0_10px_40px_-25px_rgba(29,41,80,0.3)]">
						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0088FF]/10 text-[#0088FF]">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<path d="M2 12h4l2-6 4 12 2-6h8" />
							</svg>
						</div>
						<h3 className="mt-5 text-lg font-bold text-[#1D2950]">Our Mission</h3>
						<p className="mt-2 leading-7 text-[#7783A1]">
							To provide accessible healthcare services and dependable medical care that address the needs of our patients.
						</p>
					</div>

					<div className="rounded-2xl border border-[#E4EAF5] bg-white p-8 shadow-[0_10px_40px_-25px_rgba(29,41,80,0.3)]">
						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0088FF]/10 text-[#0088FF]">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<path d="M2 20 9 9l4 4 4-6 5 13" />
								<circle cx="18" cy="5" r="2" />
							</svg>
						</div>
						<h3 className="mt-5 text-lg font-bold text-[#1D2950]">Our Vision</h3>
						<p className="mt-2 leading-7 text-[#7783A1]">
							To become a trusted healthcare provider known for consistent service, professional standards, and patient satisfaction.
						</p>
					</div>
				</div>

				<div className="mt-20 text-center">
					<span className="inline-block rounded-full bg-[#0088FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0088FF]">
						What Drives Us
					</span>
					<h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1D2950] sm:text-3xl">
						Our Core Values
					</h3>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((value, i) => (
						<div
							key={value.title}
							className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-25px_rgba(29,41,80,0.3)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(29,41,80,0.35)]"
						>
							<span className="text-sm font-bold text-[#0BE7FF]">0{i + 1}</span>
							<h4 className="mt-2 text-base font-bold text-[#1D2950]">{value.title}</h4>
							<p className="mt-2 text-sm leading-6 text-[#7783A1]">{value.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-20 overflow-hidden rounded-[2rem] bg-[#1D2950] px-8 py-12 text-center sm:px-16">
					<p className="text-xs font-semibold uppercase tracking-widest text-[#0BE7FF]">
						Our Commitment
					</p>
					<p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
						At LifeBridge Healthcare, we are committed to maintaining high standards in the way we deliver our services. We value professionalism, clear communication, and responsible practice in every aspect of our work.
					</p>
				</div>

			</div>
		</section>
	);
}