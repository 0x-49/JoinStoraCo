import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface Feature {
	name: string;
	description: string;
	stora: boolean;
	spaceManager: boolean;
	siteLink: boolean;
}

const features: Feature[] = [
	{
		name: "Online Booking",
		description: "Allow customers to book units online",
		stora: true,
		spaceManager: true,
		siteLink: true
	},
	{
		name: "Website Builder",
		description: "Built-in website creation tools",
		stora: true,
		spaceManager: false,
		siteLink: false
	},
	{
		name: "Smart Entry Integration",
		description: "Automated access control",
		stora: true,
		spaceManager: true,
		siteLink: true
	},
	{
		name: "Dynamic Pricing",
		description: "Automated price adjustments based on occupancy",
		stora: true,
		spaceManager: false,
		siteLink: false
	},
	{
		name: "Mobile App",
		description: "Native mobile application",
		stora: true,
		spaceManager: false,
		siteLink: true
	}
];

const pricing = {
	stora: "From £79/mo",
	spaceManager: "Contact for pricing",
	siteLink: "From $99/mo"
};

export function ComparisonTable() {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
			<Table>
				<TableCaption>Compare Storage Management Software Features</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Feature</TableHead>
						<TableHead className="text-center">
							Stora
							<Badge variant="secondary" className="ml-2">Recommended</Badge>
						</TableHead>
						<TableHead className="text-center">Space Manager</TableHead>
						<TableHead className="text-center">SiteLink</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{features.map((feature) => (
						<TableRow key={feature.name}>
							<TableCell className="font-medium">
								<div>{feature.name}</div>
								<div className="text-sm text-muted-foreground">{feature.description}</div>
							</TableCell>
							<TableCell className="text-center">
								{feature.stora ? (
									<CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
								) : (
									<XCircle className="h-5 w-5 text-red-500 mx-auto" />
								)}
							</TableCell>
							<TableCell className="text-center">
								{feature.spaceManager ? (
									<CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
								) : (
									<XCircle className="h-5 w-5 text-red-500 mx-auto" />
								)}
							</TableCell>
							<TableCell className="text-center">
								{feature.siteLink ? (
									<CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
								) : (
									<XCircle className="h-5 w-5 text-red-500 mx-auto" />
								)}
							</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell className="font-medium">Pricing</TableCell>
						<TableCell className="text-center font-medium">{pricing.stora}</TableCell>
						<TableCell className="text-center">{pricing.spaceManager}</TableCell>
						<TableCell className="text-center">{pricing.siteLink}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}