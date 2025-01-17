import { Card } from "@/components/ui/card";
import { ArrowRight, Rocket, Settings, Users, Zap } from "lucide-react";

const steps = [
	{
		title: "Easy Setup",
		description: "Quick implementation with guided onboarding",
		icon: <Settings className="w-8 h-8 text-primary" />,
		metrics: "Setup in < 24 hours"
	},
	{
		title: "Staff Training",
		description: "Comprehensive training for your team",
		icon: <Users className="w-8 h-8 text-primary" />,
		metrics: "1-hour training session"
	},
	{
		title: "Automation",
		description: "Start automating repetitive tasks",
		icon: <Zap className="w-8 h-8 text-primary" />,
		metrics: "Save 20+ hours/week"
	},
	{
		title: "Growth",
		description: "Scale your business with powerful tools",
		icon: <Rocket className="w-8 h-8 text-primary" />,
		metrics: "40% avg. growth rate"
	}
];

export function CustomerJourney() {
	return (
		<div className="relative">
			<div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
			<div className="grid md:grid-cols-4 gap-8 relative">
				{steps.map((step, index) => (
					<div key={index} className="relative">
						<Card className="p-6 bg-background/60 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold">
								{index + 1}
							</div>
							<div className="mt-4 text-center">
								<div className="flex justify-center mb-4">{step.icon}</div>
								<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
								<p className="text-sm text-muted-foreground mb-4">{step.description}</p>
								<div className="text-sm font-medium text-primary">{step.metrics}</div>
							</div>
						</Card>
						{index < steps.length - 1 && (
							<div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
								<ArrowRight className="w-6 h-6 text-primary/40" />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}