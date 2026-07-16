"use client";

import { useNotifications } from "@/hooks/useMember";

import NotificationCard from "@/components/member/NotificationCard";

export default function Notifications() {
  const { data } = useNotifications();

  return (
    <div>
      <h1
        className="
text-2xl
font-bold
mb-5
"
      >
        Notifications
      </h1>

      {data?.map((n: any) => (
        <NotificationCard key={n.id} item={n} />
      ))}
    </div>
  );
}
