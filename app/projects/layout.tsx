import Link from "next/link";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<nav className="border-b border-gray-200 bg-black-100 px-4 py-3">
				<div className="container mx-auto flex gap-6">
					<Link href="/projects" className="hover:underline">
						Projects Overview
					</Link>
					<Link href="/projects/settings" className="hover:underline">
						Settings
					</Link>
				</div>
			</nav>
			{children}
		</section>
	);
}
