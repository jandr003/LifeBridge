import { useState, useEffect } from "react";
import { validateContactForm, isFormValid } from "../../../utils/validators/formValidator";

export default function BookingModal({ isOpen, onClose }) {
	const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
	const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
	const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false });
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleChange = (e) => {
		const { name, value } = e.target;
		const nextValue = name === "phone" ? value.replace(/[^0-9]/g, "") : value;
		const updatedForm = { ...form, [name]: nextValue };
		setForm(updatedForm);
		if (touched[name]) {
			const fieldErrors = validateContactForm(updatedForm);
			setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
		}
	};

	const handlePhoneKeyDown = (e) => {
		const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
		if (allowedKeys.includes(e.key)) return;
		if (!/^[0-9]$/.test(e.key)) {
			e.preventDefault();
		}
	};

	const handleBlur = (e) => {
		const { name } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
		const fieldErrors = validateContactForm(form);
		setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const fieldErrors = validateContactForm(form);
		setErrors(fieldErrors);
		setTouched({ name: true, email: true, phone: true, message: true });
		if (!isFormValid(fieldErrors)) return;
		setSubmitted(true);
	};

	const resetAndClose = () => {
		setForm({ name: "", email: "", phone: "", message: "" });
		setErrors({ name: "", email: "", phone: "", message: "" });
		setTouched({ name: false, email: false, phone: false, message: false });
		setSubmitted(false);
		onClose();
	};

	const inputClass = (field) =>
		`mt-2 w-full rounded-xl border bg-[#F8FAFF] px-4 py-3 text-sm text-[#1D2950] placeholder:text-[#A9B4D0] outline-none transition-all focus:border-[#0088FF] focus:bg-white focus:ring-4 focus:ring-[#0088FF]/10 ${
			touched[field] && errors[field] ? "border-red-400 bg-red-50" : "border-[#E4EAF5]"
		}`;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
			<div
				className="absolute inset-0 bg-[#0A1330]/70 backdrop-blur-sm"
				onClick={resetAndClose}
				aria-hidden="true"
			/>

			<div
				className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				<div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#0088FF] via-[#0072D6] to-[#1D2950] px-8 py-9 sm:px-10">
					<div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
					<div className="pointer-events-none absolute -bottom-14 -left-6 h-32 w-32 rounded-full bg-white/5" />

					<button
						onClick={resetAndClose}
						aria-label="Close"
						className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1D2950] shadow-md transition-all hover:scale-105 hover:bg-[#F1F5FB]"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
							<path d="m6 6 12 12M18 6 6 18" />
						</svg>
					</button>

					<h3 className="relative mt-2 text-2xl font-extrabold text-white sm:text-[1.7rem]">
						Book an Appointment
					</h3>
					<p className="relative mt-2 max-w-sm text-sm leading-6 text-white/80">
						Tell us a bit about your visit and our team will confirm your schedule shortly.
					</p>
				</div>

				<div className="px-8 py-8 sm:px-10">
					{submitted ? (
						<div className="flex flex-col items-center justify-center py-6 text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F3FF] text-[#0088FF]">
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
									<path d="m5 12 5 5 9-10" />
								</svg>
							</div>
							<h4 className="mt-5 text-xl font-bold text-[#1D2950]">Appointment request sent</h4>
							<p className="mt-2 max-w-sm text-sm leading-6 text-[#7783A1]">
								Thank you for reaching out. A member of our team will contact you shortly to confirm
								your appointment.
							</p>
							<button
								onClick={resetAndClose}
								className="mt-7 rounded-xl bg-[#0088FF] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0072D6]"
							>
								Done
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} noValidate>
							<div>
								<label htmlFor="modal-name" className="text-sm font-semibold text-[#1D2950]">
									Full Name
								</label>
								<input
									id="modal-name"
									name="name"
									type="text"
									value={form.name}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="John Andrew"
									className={inputClass("name")}
								/>
								{touched.name && errors.name && (
									<p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>
								)}
							</div>

							<div className="mt-5">
								<label htmlFor="modal-phone" className="text-sm font-semibold text-[#1D2950]">
									Phone Number
								</label>
								<input
									id="modal-phone"
									name="phone"
									type="tel"
									inputMode="numeric"
									pattern="[0-9]*"
									value={form.phone}
									onChange={handleChange}
									onKeyDown={handlePhoneKeyDown}
									onBlur={handleBlur}
									placeholder="0917 123 4567"
									className={inputClass("phone")}
								/>
								{touched.phone && errors.phone && (
									<p className="mt-1.5 text-xs font-medium text-red-500">{errors.phone}</p>
								)}
							</div>

							<div className="mt-5">
								<label htmlFor="modal-email" className="text-sm font-semibold text-[#1D2950]">
									Email Address
								</label>
								<input
									id="modal-email"
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="andrew@email.com"
									className={inputClass("email")}
								/>
								{touched.email && errors.email && (
									<p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>
								)}
							</div>

							<div className="mt-5">
								<label htmlFor="modal-message" className="text-sm font-semibold text-[#1D2950]">
									Preferred Date / Reason for Visit
								</label>
								<textarea
									id="modal-message"
									name="message"
									rows={4}
									value={form.message}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="e.g. Sept 5, general checkup"
									className={`resize-none ${inputClass("message")}`}
								/>
								{touched.message && errors.message && (
									<p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0088FF] to-[#0072D6] py-3.5 text-sm font-semibold text-white shadow-sm shadow-[#0088FF]/15 transition-all hover:shadow-md hover:shadow-[#0088FF]/20 active:scale-[0.98]"
							>
								Request Appointment
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12h14M13 6l6 6-6 6" />
								</svg>
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
}