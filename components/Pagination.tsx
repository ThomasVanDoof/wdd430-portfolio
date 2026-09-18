"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function createPageURL(pathname: string, searchParams: URLSearchParams, page: number): string {
	const params = new URLSearchParams(searchParams);
	params.set("page", String(page));

	return `${pathname}?${params.toString()}`;
}

export default function Pagination({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const parsedPage = Number.parseInt(searchParams.get("page") ?? "1", 10);
	const currentPage = Number.isSafeInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;

	if (totalPages <= 1) return null;

	return (
		<nav className="mt-8 flex items-center gap-4" aria-label="Project pages">
			{currentPage > 1 ? (
				<Link
					href={createPageURL(pathname, searchParams, currentPage - 1)}
					className="rounded border border-gray-300 px-3 py-2 hover:bg-gray-100"
				>
					Previous
				</Link>
			) : (
				<span className="rounded border border-gray-200 px-3 py-2 text-gray-400">Previous</span>
			)}
			<span>
				Page {Math.min(currentPage, totalPages)} of {totalPages}
			</span>
			{currentPage < totalPages ? (
				<Link
					href={createPageURL(pathname, searchParams, currentPage + 1)}
					className="rounded border border-gray-300 px-3 py-2 hover:bg-gray-100"
				>
					Next
				</Link>
			) : (
				<span className="rounded border border-gray-200 px-3 py-2 text-gray-400">Next</span>
			)}
		</nav>
	);
}