import { useState } from "react";

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: "How do I book an appointment at LifeBridge Healthcare?",
			answer:
				"You can book an appointment through our online booking form, by calling our clinic directly, or by walking in during office hours. We recommend booking online for the fastest confirmation.",
		},
		{
			question: "What should I bring to my first visit?",
			answer:
				"Please bring a valid ID, your insurance card or HMO details if applicable, and any previous medical records or referral letters relevant to your visit.",
		},
		{
			question: "Do you accept health insurance or HMOs?",
			answer:
				"Yes, we work with most major HMO providers in the Philippines. Please contact our front desk before your visit to confirm if your specific plan is accepted and what it covers.",
		},
		{
			question: "Can I reschedule or cancel my appointment?",
			answer:
				"Yes, you can reschedule or cancel up to 24 hours before your appointment through our booking system or by calling the clinic. Late cancellations may be subject to a fee.",
		},
		{
			question: "Do you offer telemedicine or online consultations?",
			answer:
				"Yes, select services are available through video consultation. This option will show up during booking if it's applicable to the type of visit you need.",
		},
		{
			question: "What are your clinic hours?",
			answer:
				"We're open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 8:00 AM to 12:00 PM. We're closed on Sundays, except for pre-scheduled urgent consultations.",
		},
	];

	return (
		<section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-[#1D2950] sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 leading-7 text-[#7783A1]">
						Answers to the most common questions our patients ask before and after visiting LifeBridge
						Healthcare.
					</p>
				</div>

				<div className="mt-12 flex flex-col gap-4">
					{faqs.map((faq, i) => {
						const isOpen = openIndex === i;
						return (
							<div
								key={faq.question}
								className={`overflow-hidden rounded-2xl border transition-colors ${
									isOpen ? "border-[#0088FF]" : "border-[#E4EAF5]"
								}`}
							>
								<button
									onClick={() => setOpenIndex(isOpen ? -1 : i)}
									className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
								>
									<span className="text-base font-semibold text-[#1D2950]">{faq.question}</span>
									<span
										className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all duration-300 ${
											isOpen ? "rotate-45 bg-[#0088FF] text-white" : "bg-[#E6F3FF] text-[#0088FF]"
										}`}
									>
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
											<path d="M12 5v14M5 12h14" />
										</svg>
									</span>
								</button>

								<div
									className={`grid transition-all duration-300 ease-in-out ${
										isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
									}`}
								>
									<div className="overflow-hidden">
										<p className="px-6 pb-5 text-sm leading-6 text-[#7783A1]">{faq.answer}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-10 text-center">
					<p className="text-sm text-[#7783A1]">
						Still have questions?{" "}
						<a href="#contact" className="font-semibold text-[#0088FF] hover:underline">
							Contact our team
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}