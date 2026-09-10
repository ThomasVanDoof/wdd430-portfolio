"use client";

import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default function ProjectsOverview() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/projects")
			.then((response) => {
				if (!response.ok) throw new Error("Unable to load projects.");
				return response.json();
			})
			.then(setProjects)
			.catch((fetchError: Error) => setError(fetchError.message));
	}, []);

	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">Projects Overview</h1>
			<p className="mt-4 text-lg text-gray-700">
				Explore my open source and school projects.
			</p>
			{error ? <p className="mt-6 text-red-600">{error}</p> : <ProjectList projects={projects} />}
		</main>
	);
}
