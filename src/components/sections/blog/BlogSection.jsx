import fourthImage from "../../../assets/images/LifeBridge-4th-image.png";

export default function BlogSection() {
	const stats = [
		{ value: "12+", label: "Total Branches" },
		{ value: "10+", label: "Years Experience" },
		{ value: "50k+", label: "Patients Served" },
		{ value: "50+", label: "Medical Professional" },
	];

	const features = [
		{
			title: "Advanced Medical Technology",
			desc: "We use advanced medical technology to ensure accurate diagnoses, effective treatments, and improved patient comfort, providing safer and more efficient healthcare for every patient.",
		},
		{
			title: "Caring Healthcare Team",
			desc: "Our experienced healthcare professionals are committed to delivering compassionate, safe, and patient-centered medical care tailored to every individual.",
		},
		{
			title: "Personalized Patient Care",
			desc: "We deliver personalized care plans based on detailed assessments and thoughtful consultations, ensuring comfort and quality outcomes for every patient.",
		},
	];

	return (
		<section id="blog" className="px-4 py-32 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				<h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl" style={{ lineHeight: 1.25 }}>
					Why LifeBridge Healthcare Stands Out
				</h2>

				<div className="mt-28 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="group flex h-40 w-40 flex-none cursor-default flex-col items-center justify-center rounded-full bg-[#0088FF]/10 text-center transition hover:-translate-y-2 hover:scale-105 hover:bg-[#0088FF] hover:shadow-[0_20px_40px_-15px_rgba(0,136,255,0.5)] sm:h-48 sm:w-48"
						>
							<span className="text-2xl font-extrabold text-[#1D2950] transition group-hover:text-white sm:text-3xl">
								{stat.value}
							</span>
							<span className="mt-1 text-sm text-[#1D2950] transition group-hover:text-white">
								{stat.label}
							</span>
						</div>
					))}
				</div>

			</div>

			<div className="mx-auto mt-[200px] w-full max-w-[1280px] rounded-[2rem] bg-[#66BFFF] px-6 py-16 sm:px-12">

				<h2 className="mx-auto max-w-xl text-center text-3xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-4xl" style={{ lineHeight: 1.25 }}>
					What Makes LifeBridge Different
				</h2>

				<div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
					<div className="flex flex-col gap-5">
						{features.map((feature, i) => (
							<div
								key={feature.title}
								className="rounded-2xl bg-white p-6 shadow-[0_20px_45px_-20px_rgba(9,30,66,0.35)] transition hover:-translate-y-1"
							>
								<div className="flex items-center gap-2">
									<span className="text-sm font-bold text-[#0088FF]">0{i + 1}</span>
									<h3 className="text-base font-bold text-[#1D2950]">{feature.title}</h3>
								</div>
								<p className="mt-2 text-sm leading-6 text-[#7783A1]">{feature.desc}</p>
							</div>
						))}
					</div>

					<div>
						<img
							src={fourthImage}
							alt="LifeBridge Healthcare provider with patient"
							className="block h-auto w-full"
						/>
					</div>
				</div>

			</div>
		</section>
	);
}