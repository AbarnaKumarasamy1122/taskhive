interface TableProps {
  headers: string[];

  children: React.ReactNode;
}

export default function Table({
  headers,

  children,
}: TableProps) {
  return (
    <table
      className="
w-full
rounded-lg
overflow-hidden
bg-white
shadow
"
    >
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="
p-4
text-left
"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}
