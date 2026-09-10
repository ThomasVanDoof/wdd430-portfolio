import { getProjects } from "@/lib/projects-db";

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type");
  return Response.json(getProjects(type));
}
