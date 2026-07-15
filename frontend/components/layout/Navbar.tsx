"use client";

import useAuth from "@/hooks/useAuth";

import { Menu } from "lucide-react";

interface NavbarProps {
  setOpen: (value: boolean) => void;
}

export default function Navbar({ setOpen }: NavbarProps) {
  const {
    user,

    logout,
  } = useAuth();

  return (
    <header
      className="
flex
h-16
items-center
justify-between
border-b
bg-white
px-6
"
    >
      <div
        className="
flex
items-center
gap-4
"
      >
        <button
          className="
md:hidden
"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>

        <h1
          className="
text-xl
font-bold
"
        >
          TaskHive
        </h1>
      </div>

      <div
        className="
flex
items-center
gap-4
"
      >
        <div
          className="
text-right
hidden
sm:block
"
        >
          <p
            className="
font-semibold
"
          >
            {user?.name}
          </p>

          <p
            className="
text-sm
text-gray-500
"
          >
            {user?.role}
          </p>
        </div>

        <button
          onClick={logout}
          className="
rounded
bg-red-500
px-4
py-2
text-white
hover:bg-red-600
"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
