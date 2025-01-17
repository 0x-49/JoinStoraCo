import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
	{
		question: "What features should I look for in storage software?",
		answer: "Key features include online booking capabilities, automated payment processing, access control integration, customer management, and reporting tools. Modern solutions like Stora also offer website builders and dynamic pricing."
	},
	{
		question: "How long does it take to implement new storage software?",
		answer: "With modern solutions like Stora, implementation typically takes less than 24 hours. This includes setting up your facility, importing customer data, and configuring access control systems. Full staff training can be completed in about an hour."
	},
	{
		question: "Can I automate my facility without staff on-site?",
		answer: "Yes! Modern storage software enables fully automated operations through features like online bookings, automated payments, and smart entry systems. This allows you to run your facility efficiently with minimal to no on-site staff."
	},
	{
		question: "What ROI can I expect from storage software?",
		answer: "Based on case studies, facilities using modern storage software typically see 20+ hours saved in admin time per week, 40% increase in occupancy within 3 months, and up to 55% revenue growth in the first year."
	},
	{
		question: "Is it difficult to switch from existing software?",
		answer: "Modern solutions offer streamlined migration processes. Your data can be imported, and staff can be trained quickly. Many providers offer dedicated support during the transition to ensure a smooth switch."
	}
];

export function FAQ() {
	return (
		<Card className="p-6">
			<Accordion type="single" collapsible className="w-full">
				{faqs.map((faq, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger className="text-left">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</Card>
	);
}