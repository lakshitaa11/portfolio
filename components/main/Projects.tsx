import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/digisign.svg"
          title="DigiSign - Signature App"
          description="A user-friendly digital signature app enabling users to create and download secure e-signatures effortlessly. Focused on intuitive design for easy navigation and quick signature creation."
        />
        <ProjectCard
          src="/myportfolio.svg"
          title="My Portfolio"
          description="Discover my portfolio, built with Next.js for robust performance and Framer Motion for delightful animations."
        />
        <ProjectCard
          src="/voxclone.svg"
          title="VoxClone - AI Voice Regeneration"
          description="An application that clones voices in real-time. Users input voice samples and text, and
VoxClone synthesizes the text in the provided voice, ensuring accurate voice replication and seamless speech
synthesis."
        />
      </div>
    </div>
  );
};

export default Projects;
