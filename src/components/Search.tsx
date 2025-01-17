import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const searchItems = [
	{
		group: "Software",
		items: [
			{ title: "Storage Management Software", href: "/categories/software#management" },
			{ title: "Access Control Systems", href: "/categories/software#access" },
			{ title: "Marketing Tools", href: "/categories/software#marketing" }
		]
	},
	{
		group: "Resources",
		items: [
			{ title: "Software Comparison Guide", href: "/blog/posts/top-5-self-storage-software-2025" },
			{ title: "Automation Guide", href: "/blog/posts/automating-self-storage-business-guide" },
			{ title: "Case Studies", href: "/case-studies" }
		]
	}
];

export function Search() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="inline-flex items-center gap-2 text-sm text-muted-foreground"
			>
				<SearchIcon className="w-4 h-4" />
				<span className="hidden sm:inline">Search...</span>
				<kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
					<span className="text-xs">⌘</span>K
				</kbd>
			</button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type to search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{searchItems.map((group) => (
						<CommandGroup key={group.group} heading={group.group}>
							{group.items.map((item) => (
								<CommandItem
									key={item.href}
									onSelect={() => {
										setOpen(false);
										window.location.href = item.href;
									}}
								>
									{item.title}
								</CommandItem>
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</>
	);
}