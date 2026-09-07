import SkillsCard from '@/components/SkillsList';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-black-700">
        This about page shares more information about my background and work.
      </p>
      <SkillsCard skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']} />
    </main>
  );
}