"use client";

import { useState } from "react";

import CreateProjectModal from "@/components/manager/CreateProjectModal";
import ProjectTable from "@/components/projects/ProjectTable";

export default function ProjectsPage() {

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500">
            Create and manage your projects
          </p>
        </div>


        {/* Create button opens modal */}
        <CreateProjectModal />

      </div>


      {/* Project list */}
      <ProjectTable />


      {/* Member assignment section */}
      <div className="
        bg-white
        rounded
        shadow
        p-6
      ">


      </div>


    </div>
  );
}