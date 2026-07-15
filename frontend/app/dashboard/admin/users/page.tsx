import UserTable from "@/components/users/UserTable";
import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading)
    return (
      <div>
        <p>Loading users...</p>
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
            Manage Users
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
            + New User
          </button>
        </div>

        <UserTable />
      </div>
    );
}
