"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8">
        {projects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <Modal>
      <ModalTrigger className="bg-transparent w-full text-left group/modal-btn">
        <div className="relative w-full rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 p-6 cursor-pointer shadow-sm hover:shadow-md">
          {/* Category pill */}
          <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5 mb-4">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover/modal-btn:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[...project.skills.frontend, ...project.skills.backend].map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-md px-2 py-1 bg-secondary/40"
              >
                <span className="text-sm">{skill.icon}</span>
                {skill.title}
              </span>
            ))}
          </div>

          {/* Bottom row: live demo + open hint */}
          <div className="mt-5 flex items-center justify-between">
            <Link
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-mono text-muted-foreground border border-border rounded-md px-3 py-1 hover:bg-secondary/60 hover:text-foreground transition-colors"
            >
              live demo ↗
            </Link>
            <span className="text-xs text-muted-foreground font-mono flex items-center gap-1 group-hover/modal-btn:gap-2 transition-all">
              details →
            </span>
          </div>
        </div>
      </ModalTrigger>

      <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
        <SmoothScroll isInsideModal={true}>
          <ModalContent>
            <ProjectContents project={project} />
          </ModalContent>
        </SmoothScroll>
        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <Link href={project.live} target="_blank">
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Live Demo
            </button>
          </Link>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">Frontend</p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};

export default ProjectsSection;
