import ProjectTable from "@/components/projects/ProjectTable";

export default function ProjectsPage() {
  return (
    <div>
      <div
        className="
flex
justify-between
mb-6
"
      >
        <h1
          className="
text-3xl
font-bold
"
        >
          Projects
        </h1>

        <button
          className="
bg-blue-600
text-white
px-5
py-2
rounded
"
        >
          + Create Project
        </button>
      </div>

      <ProjectTable />
    </div>
  );
}
