import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, Users } from "lucide-react";

const caseStudies = [
	{
		title: "Bien Sûr Storage",
		type: "Container Storage",
		metrics: [
			{ label: "Occupancy Increase", value: "40%", timeframe: "3 months" },
			{ label: "Admin Time Saved", value: "20hrs", timeframe: "per week" },
			{ label: "Revenue Growth", value: "55%", timeframe: "Year 1" }
		],
		quote: "The automation tools have transformed our business. We're operating at maximum efficiency with minimal staff intervention.",
		author: "James Wilson, Owner"
	},
	{
		title: "M3 Self Storage",
		type: "Indoor Facility",
		metrics: [
			{ label: "Space Utilization", value: "95%", timeframe: "achieved" },
			{ label: "Customer Growth", value: "120%", timeframe: "Year 1" },
			{ label: "Booking Rate", value: "3x", timeframe: "increase" }
		],
		quote: "I'll be full in 2 months if it keeps on like this. 22,000 sq ft in 10 months, I'd planned for 3 years.",
		author: "Nick Jones, Owner"
	}
];

export function CaseStudies() {
	return (
		<div className="grid md:grid-cols-2 gap-8">
			{caseStudies.map((study, index) => (
				<Card key={index} className="relative overflow-hidden group">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
					<CardHeader>
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-2">
								<Building2 className="w-5 h-5 text-primary" />
								<CardTitle>{study.title}</CardTitle>
							</div>
							<Badge variant="secondary">{study.type}</Badge>
						</div>
						<div className="grid grid-cols-3 gap-4 mb-6">
							{study.metrics.map((metric, idx) => (
								<div key={idx} className="text-center p-3 rounded-lg bg-primary/5">
									<div className="text-2xl font-bold text-primary">{metric.value}</div>
									<div className="text-sm text-muted-foreground">{metric.label}</div>
									<div className="text-xs text-muted-foreground">{metric.timeframe}</div>
								</div>
							))}
						</div>
					</CardHeader>
					<CardContent>
						<blockquote className="border-l-2 border-primary/20 pl-4 italic text-muted-foreground">
							"{study.quote}"
						</blockquote>
						<div className="mt-4 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4 text-primary" />
								<span className="text-sm font-medium">{study.author}</span>
							</div>
							<ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}