import Link from "next/link";

export default function MemberDashboard() {
  return (
    <div>
      <h1
        className="
text-3xl
font-bold
mb-8
"
      >
        Team Member Dashboard
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
rounded-xl
shadow
"
        >
          <h2>Assigned Tasks</h2>

          <p
            className="
text-4xl
font-bold
"
          >
            12
          </p>
        </div>

        <div
          className="
bg-white
p-6
rounded-xl
shadow
"
        >
          <h2>Completed</h2>

          <p
            className="
text-4xl
font-bold
"
          >
            7
          </p>
        </div>

        <div
          className="
bg-white
p-6
rounded-xl
shadow
"
        >
          <h2>Remaining</h2>

          <p
            className="
text-4xl
font-bold
"
          >
            5
          </p>
        </div>
      </div>

      <div
        className="
mt-10
space-x-4
"
      >
        <Link
          href="/dashboard/member/projects"
          className="
bg-blue-600
text-white
px-5
py-3
rounded
"
        >
          My Projects
        </Link>

        <Link
          href="/dashboard/member/tasks"
          className="
bg-green-600
text-white
px-5
py-3
rounded
"
        >
          My Tasks
        </Link>

        <Link
          href="/dashboard/member/notifications"
          className="
bg-gray-700
text-white
px-5
py-3
rounded
"
        >
          Notifications
        </Link>
      </div>
    </div>
  );
}
