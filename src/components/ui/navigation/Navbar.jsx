import { useMemo, useState } from "react";
import { navLinks } from "../../../data/navigation/navLinks";
import logo from "../../../assets/images/APPWEBSITE LOGO.png";

const SEARCH_ITEMS = ["Home", "About Us", "Our Services", "Team", "Blog", "Contact"];

function SearchIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.35-4.35" />
		</svg>
	);
}

function MenuIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<path d="M3 6h18M3 12h18M3 18h18" />
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<path d="M18 6 6 18M6 6l12 12" />
		</svg>
	);
}

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [submittedTerm, setSubmittedTerm] = useState("");

	const searchResults = useMemo(() => {
		const term = submittedTerm.trim().toLowerCase();
		if (!term) return [];

		return SEARCH_ITEMS.filter((item) => item.toLowerCase().includes(term));
	}, [submittedTerm]);

	const handleSearchToggle = () => {
		setIsSearchOpen((prev) => {
			if (prev && !searchValue.trim()) {
				setSubmittedTerm("");
			}
			return !prev;
		});
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		const trimmed = searchValue.trim();

		if (!trimmed) {
			setSubmittedTerm("");
			setIsSearchOpen(false);
			return;
		}

		setSubmittedTerm(trimmed);
	};

	const handleSearchBlur = () => {
		if (!searchValue.trim() && !submittedTerm.trim()) {
			setIsSearchOpen(false);
		}
	};

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur [&_a]:no-underline">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<a className="relative z-10 inline-flex h-10 w-28 items-center" href="#home">
					<span className="absolute left-0 top-1/2 h-12 w-40 -translate-y-1/2 overflow-hidden sm:h-14 sm:w-44">
						<img alt="LifeBridge logo" className="relative -top-12 h-auto w-full sm:-top-14" src={logo} />
					</span>
				</a>

				<nav className="hidden items-center gap-6 lg:flex" aria-label="Main Navigation">
					{navLinks.map((link) => (
						<a
							key={link.label}
							className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<button
						aria-expanded={isSearchOpen}
						aria-label={isSearchOpen ? "Close search" : "Open search"}
						className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
						onClick={handleSearchToggle}
						type="button"
					>
						{isSearchOpen ? <CloseIcon /> : <SearchIcon />}
					</button>

					<a
						className="rounded-lg bg-[#0088FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0075DB]"
						href="#contact"
					>
						Contact Us
					</a>
				</div>

				<button
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="rounded-full p-2 text-slate-700 lg:hidden"
					onClick={() => setIsMenuOpen((prev) => !prev)}
					type="button"
				>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>

			{isSearchOpen && (
				<div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
					<form className="flex gap-2" onSubmit={handleSearchSubmit}>
						<input
							autoFocus
							className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
							onBlur={handleSearchBlur}
							onChange={(event) => {
								const nextValue = event.target.value;
								setSearchValue(nextValue);

								if (!nextValue.trim()) {
									setSubmittedTerm("");
								}
							}}
							placeholder="Search..."
							type="text"
							value={searchValue}
						/>
						<button
							className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
							type="submit"
						>
							Search
						</button>
					</form>

					{submittedTerm && (
						<div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm">
							{searchResults.length > 0 ? (
								<ul className="space-y-1">
									{searchResults.map((item) => (
										<li key={item} className="text-slate-700">
											{item}
										</li>
									))}
								</ul>
							) : (
								<p className="text-slate-500">No results found for "{submittedTerm}".</p>
							)}
						</div>
					)}
				</div>
			)}

			{isMenuOpen && (
				<div className="border-t border-slate-200 px-4 pb-4 pt-3 lg:hidden">
					<nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
						{navLinks.map((link) => (
							<a
								key={link.label}
								className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
								className="mt-2 rounded-lg bg-[#0088FF] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0075DB]"
							href="#contact"
							onClick={() => setIsMenuOpen(false)}
						>
								Contact Us
						</a>
					</nav>
				</div>
			)}
		</header>
	);
}

