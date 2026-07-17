"use client";

import { useTeamMembers } from "@/hooks/useUsers";

interface Props {
  selected: string[];

  setSelected: (value: string[]) => void;
}

export default function MemberSelector({
  selected,

  setSelected,
}: Props) {
  const { data: users = [], isLoading, error } = useTeamMembers();

  const toggleMember = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((userId) => userId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  if (isLoading) {
    return <p className="text-gray-500">Loading team members...</p>;
  }

  if (error) {
    return (
      <p
        className="
  text-red-500
  bg-red-50
  p-3
  rounded
  "
      >
        Failed to load members
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <h3
        className="
font-bold
text-lg
"
      >
        Assign Team Members
      </h3>

      <div
        className="
border
rounded
p-4
space-y-3
max-h-48
overflow-y-auto
"
      >
        {users.map((user: any) => (
          <label
            key={user.id}
            className="
flex
items-center
gap-3
cursor-pointer
"
          >
            <input
              type="checkbox"
              checked={selected.includes(user.id)}
              onChange={() => toggleMember(user.id)}
            />

            <div>
              <p
                className="
font-medium
"
              >
                {user.name}
              </p>

              <p
                className="
text-sm
text-gray-500
"
              >
                {user.email}
              </p>
            </div>
          </label>
        ))}
      </div>

      {selected.length > 0 && (
        <p
          className="
text-sm
text-gray-600
"
        >
          Selected Members:
          {selected.length}
        </p>
      )}
    </div>
  );
}
