import { Suspense } from "react";
import SchoolProjectList from "./SchoolProjectList";

function SchoolProjectListSkeleton() {
	return (
		<section className="container mx-auto space-y-4 p-4" aria-busy="true" aria-label="Loading school projects">
			{[1, 2, 3].map((item) => (
				<article key={item} className="animate-pulse rounded bg-gray-100 p-4 shadow-md">
					<div className="mb-3 h-7 w-2/5 rounded bg-gray-300" />
					<div className="mb-2 h-4 w-full rounded bg-gray-300" />
					<div className="mb-2 h-4 w-4/5 rounded bg-gray-300" />
					<div className="mb-2 h-4 w-3/5 rounded bg-gray-300" />
					<div className="mt-4 h-5 w-1/4 rounded bg-gray-300" />
				</article>
			))}
		</section>
	);
}

export default function SchoolProjects() {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold">School Projects</h1>
			<Suspense fallback={<SchoolProjectListSkeleton />}>
				<SchoolProjectList />
			</Suspense>
		</main>
	);
}
