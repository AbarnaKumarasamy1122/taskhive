import StatusSelector from "./StatusSelector";

import CommentBox from "./CommentBox";

export default function TaskCard({ task }: any) {
  return (
    <div
      className="
border
rounded
p-5
bg-white
"
    >
      <h2 className="font-bold">{task.title}</h2>

      <p>{task.description}</p>

      <p>
        Priority:
        {task.priority}
      </p>

      <StatusSelector task={task} />

      <CommentBox taskId={task.id} />
    </div>
  );
}
