"use client";

import { useActivity } from "@/hooks/useMember";

import ActivityTimeline from "@/components/member/ActivityTimeline";

export default function ActivityPage() {
  const { data } = useActivity();

  return (
    <div>
      <h1
        className="
text-2xl
font-bold
mb-5
"
      >
        Activity Timeline
      </h1>

      <ActivityTimeline activities={data} />
    </div>
  );
}
