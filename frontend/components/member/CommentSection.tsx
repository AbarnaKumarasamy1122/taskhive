"use client";

import { useState } from "react";

import { useTaskActions } from "@/hooks/useTasks";

export default function CommentSection({ taskId }: { taskId: string }) {
  const [comment, setComment] = useState("");

  const { comment: addComment } = useTaskActions();

  return (
    <div className="mt-5">
      <textarea
        className="
border
rounded
p-3
w-full
"
        placeholder="Add comment"
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="
bg-blue-600
text-white
px-4
py-2
rounded
mt-2
"
        onClick={() => {
          addComment.mutate({
            taskId,

            comment,
          });

          setComment("");
        }}
      >
        Comment
      </button>
    </div>
  );
}
