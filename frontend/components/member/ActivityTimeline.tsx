export default function ActivityTimeline({ activities }: any) {
  return (
    <div className="space-y-3">
      {activities?.map((a: any) => (
        <div
          key={a.id}
          className="
border-l-4
p-3
"
        >
          <p>{a.action}</p>

          <p>{new Date(a.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
