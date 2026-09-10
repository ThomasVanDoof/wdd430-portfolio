"use client";

import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default function SchoolProjects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/projects?type=school")
			.then((response) => {
				if (!response.ok) throw new Error("Unable to load school projects.");
				return response.json();
			})
			.then(setProjects)
			.catch((fetchError: Error) => setError(fetchError.message));
	}, []);

	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">School Projects</h1>
			{error ? <p className="mt-6 text-red-600">{error}</p> : <ProjectList projects={projects} />}
		</main>
	);
}
