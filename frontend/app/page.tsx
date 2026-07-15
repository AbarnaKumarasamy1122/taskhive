"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}

      <nav className="flex items-center justify-between border-b bg-white px-10 py-5">

        <h1 className="text-3xl font-bold text-blue-600">
          TaskHive
        </h1>

        <div className="space-x-4">

          <Link
            href="/login"
            className="rounded border px-5 py-2 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Register
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-8 py-24 text-center">

        <h1 className="mb-6 text-6xl font-bold">

          Project & Team

          <span className="text-blue-600">

            {" "}Task Management

          </span>

        </h1>

        <p className="max-w-3xl text-xl text-gray-600">

          TaskHive helps administrators, project managers and team
          members collaborate efficiently with secure role-based
          project and task management.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg text-white"
          >
            Get Started
          </Link>

          <Link
            href="/register"
            className="rounded-lg border px-8 py-4 text-lg"
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-8 pb-24">

        <div className="rounded-xl bg-white p-8 shadow">

          <h2 className="mb-4 text-2xl font-semibold">

            Administrator

          </h2>

          <ul className="space-y-2 text-gray-600">

            <li>Manage Users</li>

            <li>Assign Roles</li>

            <li>Manage Projects</li>

            <li>Dashboard Statistics</li>

          </ul>

        </div>

        <div className="rounded-xl bg-white p-8 shadow">

          <h2 className="mb-4 text-2xl font-semibold">

            Project Manager

          </h2>

          <ul className="space-y-2 text-gray-600">

            <li>Create Projects</li>

            <li>Assign Members</li>

            <li>Create Tasks</li>

            <li>Track Progress</li>

          </ul>

        </div>

        <div className="rounded-xl bg-white p-8 shadow">

          <h2 className="mb-4 text-2xl font-semibold">

            Team Member

          </h2>

          <ul className="space-y-2 text-gray-600">

            <li>View Projects</li>

            <li>Update Tasks</li>

            <li>Add Comments</li>

            <li>Receive Notifications</li>

          </ul>

        </div>

      </section>

    </main>
  );
}