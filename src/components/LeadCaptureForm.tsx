import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function LeadCaptureForm() {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would handle the form submission
		toast({
			title: "Thanks for your interest!",
			description: "We'll be in touch with you shortly.",
		});
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Get Free Guide</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Get Your Free Storage Software Guide</DialogTitle>
					<DialogDescription>
						Learn how to choose the right software for your storage business. Complete the form below to receive your guide.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="Your name" required />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="your@email.com" required />
					</div>
					<div className="space-y-2">
						<Label htmlFor="facility">Facility Size</Label>
						<Input id="facility" placeholder="Number of units" />
					</div>
					<Button type="submit" className="w-full">Download Guide</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}