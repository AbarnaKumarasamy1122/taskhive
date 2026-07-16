"use client";

import { useState } from "react";

import { useComment } from "@/hooks/useMember";

export default function CommentBox({ taskId }: any) {
  const [comment, setComment] = useState("");

  const mutation = useComment();

  return (
    <div className="mt-4">
      <input
        className="
border
p-2
w-full
"
        placeholder="Add comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="
bg-black
text-white
px-4
py-2
mt-2
rounded
"
        onClick={() => {
          mutation.mutate({
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
