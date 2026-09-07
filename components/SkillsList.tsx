interface SkillsCardProps {
  skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mt-6">
      <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}