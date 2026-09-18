import { Suspense } from "react";
import Pagination from "@/components/Pagination";
import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

export default async function ProjectsOverview({
	searchParams,
}: {
	searchParams: Promise<{ query?: string | string[]; page?: string | string[] }>;
}) {
	const { query, page } = await searchParams;
	const [projects, totalPages] = await Promise.all([
		fetchFilteredProjects(query, page),
		fetchProjectsPages(query),
	]);

	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">Projects Overview</h1>
			<p className="mt-4 text-lg text-gray-700">
				Explore my open source and school projects.
			</p>
			<Suspense fallback={null}>
				<ProjectSearch initialQuery={typeof query === "string" ? query : query?.[0] ?? ""} />
			</Suspense>
			<ProjectList projects={projects} />
			<Pagination totalPages={totalPages} />
		</main>
	);
}
