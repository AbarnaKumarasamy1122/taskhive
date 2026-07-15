import Link from "next/link";

export default function NotFound() {
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
text-6xl
font-bold
"
      >
        404
      </h1>

      <p>Page not found</p>

      <Link
        href="/"
        className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded
"
      >
        Go Home
      </Link>
    </div>
  );
}
