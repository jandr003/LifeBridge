import { useMemo, useRef, useState } from "react";
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
	const [notFound, setNotFound] = useState(false);
	const searchInputRef = useRef(null);

	const searchResults = useMemo(() => {
		const term = searchValue.trim().toLowerCase();
		if (!term) return [];
		return SEARCH_ITEMS.filter((item) => item.toLowerCase().includes(term));
	}, [searchValue]);

	const findMatchingLink = (label) => {
		return navLinks.find(
			(link) => link.label.toLowerCase() === label.toLowerCase()
		);
	};

	const goToResult = (label) => {
		const match = findMatchingLink(label);
		if (match?.href) {
			window.location.hash = match.href.replace("#", "");
		}
		closeSearch();
	};

	const closeSearch = () => {
		setIsSearchOpen(false);
		setSearchValue("");
		setNotFound(false);
	};

	const handleIconClick = () => {
		if (!isSearchOpen) {
			setIsSearchOpen(true);
			setTimeout(() => searchInputRef.current?.focus(), 250);
			return;
		}

		if (!searchValue.trim()) {
			closeSearch();
			return;
		}

		if (searchResults.length > 0) {
			goToResult(searchResults[0]);
		} else {
			setNotFound(true);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleIconClick();
		}
		if (e.key === "Escape") {
			closeSearch();
		}
	};

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur [&_a]:no-underline">
			<div className="relative mx-auto flex h-20 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
				<a
					className="absolute left-4 top-1/2 z-10 flex h-40 -translate-y-1/2 items-center sm:left-6 sm:h-48 lg:left-8"
					href="#home"
				>
					<img alt="LifeBridge logo" className="h-full w-auto object-contain" src={logo} />
				</a>

				<nav
					className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex"
					aria-label="Main Navigation"
				>
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
					<div className="flex items-center">
						<div
							className={`overflow-hidden transition-all duration-300 ease-out ${
								isSearchOpen ? "w-44 opacity-100" : "w-0 opacity-0"
							}`}
						>
							<div className="relative mr-2">
								<input
									ref={searchInputRef}
									type="text"
									value={searchValue}
									onChange={(e) => {
										setSearchValue(e.target.value);
										setNotFound(false);
									}}
									onKeyDown={handleKeyDown}
									placeholder="Search sections..."
									className="w-44 rounded-full border border-[#E4EAF5] bg-[#F8FAFF] py-2.5 pl-4 pr-10 text-sm text-[#1D2950] placeholder:text-[#A9B4D0] outline-none transition-all focus:border-[#0088FF] focus:bg-white"
								/>

								{searchValue && searchResults.length > 0 && (
									<div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-[#E4EAF5] bg-white shadow-lg">
										{searchResults.map((item) => (
											<button
												key={item}
												onMouseDown={() => goToResult(item)}
												className="block w-full px-4 py-2.5 text-left text-sm text-[#1D2950] transition-colors hover:bg-[#F1F5FB]"
											>
												{item}
											</button>
										))}
									</div>
								)}

								{notFound && (
									<div className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-[#E4EAF5] bg-white px-4 py-2.5 text-sm text-[#7783A1] shadow-lg">
										No results found for "{searchValue}".
									</div>
								)}
							</div>
						</div>

						<button
							aria-expanded={isSearchOpen}
							aria-label={isSearchOpen ? "Search" : "Open search"}
							className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 hover:text-[#0088FF]"
							onClick={handleIconClick}
							type="button"
						>
							<SearchIcon />
						</button>
					</div>

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