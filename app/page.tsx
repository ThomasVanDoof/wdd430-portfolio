import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Qurk Board',
    description: 'A web application that lets users create accounts, create and manage boards, and add tasks to those boards. Users can also share boards with other users.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    link: 'https://github.com/ThomasVanDoof/wdd430-portfolio'
  },
  {
    title: 'Cave Art',
    description: 'A web application for displaying and managing images. Similar to DeviantArt, users can create accounts, upload images, and view images uploaded by other users.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/ThomasVanDoof/wdd430-portfolio'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my current projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}