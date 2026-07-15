"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div
      className="
min-h-screen
flex
flex-col
items-center
justify-center
"
    >
      <h1
        className="
text-4xl
font-bold
text-red-600
"
      >
        Something went wrong
      </h1>

      <p className="mt-3">Please try again</p>

      <button
        onClick={reset}
        className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded
"
      >
        Retry
      </button>
    </div>
  );
}
