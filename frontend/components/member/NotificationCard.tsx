export default function NotificationCard({ item }: any) {
  return (
    <div
      className="
border
p-4
rounded
bg-white
"
    >
      <p>{item.message}</p>

      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
    </div>
  );
}
