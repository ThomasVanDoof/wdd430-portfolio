import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function ProjectsOverview() {
	const projects = await getProjects();

	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">Projects Overview</h1>
			<p className="mt-4 text-lg text-gray-700">
				Explore my open source and school projects.
			</p>
			<ProjectList projects={projects} />
		</main>
	);
}
