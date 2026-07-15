import Link from "next/link";

export default function ManagerDashboard() {
  return (
    <div>
      <h1
        className="
text-3xl
font-bold
mb-6
"
      >
        Project Manager Dashboard
      </h1>

      <div
        className="
grid
grid-cols-3
gap-6
"
      >
        <div
          className="
bg-white
p-6
rounded
shadow
"
        >
          <h2>Projects</h2>

          <p
            className="
text-3xl
font-bold
"
          >
            10
          </p>
        </div>

        <div
          className="
bg-white
p-6
rounded
shadow
"
        >
          <h2>Members</h2>

          <p
            className="
text-3xl
font-bold
"
          >
            25
          </p>
        </div>

        <div
          className="
bg-white
p-6
rounded
shadow
"
        >
          <h2>Pending Tasks</h2>

          <p
            className="
text-3xl
font-bold
"
          >
            15
          </p>
        </div>
      </div>

      <div className="mt-8 space-x-4">
        <Link
          href="/dashboard/manager/projects"
          className="
bg-blue-600
text-white
px-5
py-3
rounded
"
        >
          Manage Projects
        </Link>

        <Link
          href="/dashboard/manager/tasks"
          className="
bg-green-600
text-white
px-5
py-3
rounded
"
        >
          Manage Tasks
        </Link>
      </div>
    </div>
  );
}
