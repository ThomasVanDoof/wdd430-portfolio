interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="bg-gray-100 p-4 rounded shadow-md"> 
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
        <p className="mb-2"><strong>Technologies:</strong> {technologies.join(", ")}</p>
        {link && (
            <p className="mt-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                </a>
            </p>
        )}
    </article>
  );
}