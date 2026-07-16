"use client";

import { useUsers } from "@/hooks/useUsers";

interface Props {
  selected: string[];
  setSelected: (value: string[]) => void;
}

export default function MemberSelector({ selected, setSelected }: Props) {
  const { data: users = [], isLoading, error } = useUsers();

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  if (isLoading) {
    return <p>Loading team members...</p>;
  }

  if (error) {
    return <p className="text-red-500">Failed to load team members.</p>;
  }

  return (
    <div>
      <h3 className="font-bold mb-2">Assign Members</h3>

      <div className="space-y-2">
        {users.map((user: any) => (
          <label key={user.id} className="flex gap-2">
            <input
              type="checkbox"
              checked={selected.includes(user.id)}
              onChange={() => toggle(user.id)}
            />

            {user.name}
          </label>
        ))}
      </div>
    </div>
  );
}
