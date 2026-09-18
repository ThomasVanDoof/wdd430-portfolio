function ProjectCardSkeleton() {
  return (
    <article className="animate-pulse rounded bg-gray-100 p-4 shadow-md">
      <div className="mb-3 h-7 w-2/5 rounded bg-gray-300" />
      <div className="mb-2 h-4 w-full rounded bg-gray-300" />
      <div className="mb-2 h-4 w-4/5 rounded bg-gray-300" />
      <div className="mb-2 h-4 w-3/5 rounded bg-gray-300" />
      <div className="mt-4 h-5 w-1/4 rounded bg-gray-300" />
    </article>
  );
}

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-12" aria-busy="true" aria-label="Loading open source projects">
      <div className="mb-8 h-10 w-2/3 animate-pulse rounded bg-gray-300" />
      <section className="container mx-auto space-y-4 p-4">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </section>
    </main>
  );
}