import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjects() {
	const projects = await getProjects("opensource");

	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">Open Source Projects</h1>
			<ProjectList projects={projects} />
		</main>
	);
}
