export default function ProjectCard({ project }: any) {
  return (
    <div
      className="
border
rounded
p-5
bg-white
"
    >
      <h2
        className="
font-bold
text-xl
"
      >
        {project.title}
      </h2>

      <p>{project.description}</p>

      <p className="mt-3">
        Status:
        <b>{project.status}</b>
      </p>
    </div>
  );
}
