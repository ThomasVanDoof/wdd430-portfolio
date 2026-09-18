import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const PROJECTS_PER_PAGE = 2;

function sanitizeSearchQuery(query?: string | string[] | null): string {
  const value = Array.isArray(query) ? query[0] : query;

  return (value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, 100);
}

function sanitizePage(page?: string | string[] | null): number {
  const value = Array.isArray(page) ? page[0] : page;
  const parsedPage = Number.parseInt(value ?? "1", 10);

  return Number.isSafeInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
}

function createSearchPattern(query?: string | string[] | null): string {
  const sanitizedQuery = sanitizeSearchQuery(query).replace(/[\\%_]/g, "\\$&");

  return `%${sanitizedQuery}%`;
}

export async function fetchFilteredProjects(
  query?: string | string[] | null,
  page?: string | string[] | null,
): Promise<Project[]> {
  const searchPattern = createSearchPattern(query);
  const currentPage = sanitizePage(page);
  const offset = (currentPage - 1) * PROJECTS_PER_PAGE;
  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE title ILIKE ${searchPattern} ESCAPE '\\'
      OR description ILIKE ${searchPattern} ESCAPE '\\'
      OR technologies::text ILIKE ${searchPattern} ESCAPE '\\'
    ORDER BY id
    LIMIT ${PROJECTS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(
  query?: string | string[] | null,
): Promise<number> {
  const searchPattern = createSearchPattern(query);
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*)::int AS count FROM projects
    WHERE title ILIKE ${searchPattern} ESCAPE '\\'
      OR description ILIKE ${searchPattern} ESCAPE '\\'
      OR technologies::text ILIKE ${searchPattern} ESCAPE '\\'
  `;

  return Math.max(1, Math.ceil(Number(rows[0]?.count ?? 0) / PROJECTS_PER_PAGE));
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }

  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}
