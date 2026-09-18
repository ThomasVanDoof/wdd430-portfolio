"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProjectSearch({ initialQuery = "" }: { initialQuery?: string }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(initialQuery);

	useEffect(() => {
		const timeout = setTimeout(() => setQuery(searchParams.get("query") ?? ""), 0);

		return () => clearTimeout(timeout);
	}, [searchParams]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const params = new URLSearchParams(searchParams.toString());
			const currentQuery = params.get("query") ?? "";

			if (query.trim() === currentQuery) return;

			if (query.trim()) {
				params.set("query", query.trim());
			} else {
				params.delete("query");
			}
			params.set("page", "1");
			router.push(`${pathname}?${params.toString()}`, { scroll: false });
		}, 300);

		return () => clearTimeout(timeout);
	}, [pathname, query, router, searchParams]);

	return (
		<label className="mt-6 block max-w-xl">
			<span className="mb-2 block font-semibold">Search projects</span>
			<input
				type="search"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
				placeholder="Search by title, description, or technology"
				className="w-full rounded border border-gray-300 px-3 py-2"
			/>
		</label>
	);
}