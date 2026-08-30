import logo from "../../../assets/images/APPWEBSITE LOGO.png";

export default function FooterSection() {
	const companyLinks = ["About Us", "Our Services", "Team", "Blog", "Contact Us"];
	const helpfulLinks = ["Healthcare Providers", "Medical Services", "Careers at LifeBridge", "Patient Support", "Terms of Use"];
	const hours = [
		{ day: "Monday - Friday", time: "8:00am - 6:00pm" },
		{ day: "Saturday", time: "8:00am - 12:00am" },
		{ day: "Sunday", time: "Closed" },
	];

	return (
		<footer className="border-t border-[#E4EAF5] px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
				<div>
					<img src={logo} alt="LifeBridge Healthcare" className="h-48 w-auto" />
				</div>

				<div>
					<h3 className="text-base font-bold text-[#1D2950]">LifeBridge Healthcare</h3>
					<ul className="mt-5 flex flex-col gap-3">
						{companyLinks.map((link) => (
							<li key={link}>
								<a href="#" className="text-sm text-[#5B6B8C] transition-colors hover:text-[#0088FF]">
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-base font-bold text-[#1D2950]">Helpful Links</h3>
					<ul className="mt-5 flex flex-col gap-3">
						{helpfulLinks.map((link) => (
							<li key={link}>
								<a href="#" className="text-sm text-[#5B6B8C] transition-colors hover:text-[#0088FF]">
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-base font-bold text-[#1D2950]">LifeBridge Healthcare</h3>
					<ul className="mt-5 flex flex-col gap-3">
						{hours.map((h) => (
							<li key={h.day} className="text-sm">
								<span className="font-semibold text-[#0088FF]">{h.day}:</span>{" "}
								<span className="text-[#7783A1]">{h.time}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-[#E4EAF5] pt-6 sm:flex-row">
				<p className="text-xs text-[#A9B4D0]">
					© {new Date().getFullYear()} LifeBridge. All Rights Reserved
				</p>

				<div className="flex items-center gap-3">
					{[
						{
							label: "Facebook",
							href: "https://www.facebook.com/johnownsit",
							path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9v1.5H9V13h1.5v6H13v-6h1.8l.3-2.5H13V9c0-.3.2-.5.5-.5Z",
						},
						{
							label: "Instagram",
							href: "https://www.instagram.com/johnownsit/",
							path: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm4.1-3.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z",
						},
						{
							label: "LinkedIn",
							href: "https://www.linkedin.com/in/john-andrew-gresola/",
							path: "M6.9 8.5H4V19h2.9V8.5ZM5.45 4.2A1.7 1.7 0 1 0 5.47 7.6a1.7 1.7 0 0 0-.02-3.4ZM19.9 19h-2.9v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-2.9s.04-9.6 0-10.5h2.9v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.6 1.3 3.6 4V19Z",
						},
						{
							label: "X",
							href: "https://x.com/jandr_03",
							path: "M13.9 10.6 20 4h-1.5l-5.3 5.7L9 4H4l6.4 9.1L4 20h1.5l5.6-6 4.5 6H20l-6.1-9.4Zm-2 2.3-.6-.9L6.2 5.1h2.1l4.2 5.9.6.9 5.4 7.6h-2.1l-4.5-6.6Z",
						},
					].map((icon) => (
						<a
							key={icon.label}
							href={icon.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={icon.label}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E6FA] text-[#0088FF] transition-colors hover:bg-[#0088FF] hover:text-white"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d={icon.path} />
							</svg>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}