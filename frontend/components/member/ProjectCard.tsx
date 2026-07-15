interface Props {
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
bg-white
rounded-xl
shadow
p-6
"
    >
      <h2
        className="
text-xl
font-bold
"
      >
        {project.title}
      </h2>

      <p
        className="
text-gray-600
mt-3
"
      >
        {project.description}
      </p>

      <div
        className="
mt-4
"
      >
        Status:
        <span
          className="
font-semibold
ml-2
"
        >
          {project.status}
        </span>
      </div>
    </div>
  );
}
