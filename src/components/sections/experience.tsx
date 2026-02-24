"use client";

import { useRef } from "react";
import { EDUCATION, EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  // Track when the Education heading's top edge approaches the sticky header (~70px from top).
  // scrollYProgress goes 0→1 as education top moves from 200px → 70px from viewport top.
  const { scrollYProgress } = useScroll({
    target: educationRef,
    offset: ["start 200px", "start 70px"],
  });
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">

        {/* Sticky "Experience" header — fades out only when Education reaches the top */}
        <motion.div style={{ opacity: headerOpacity }}>
          <SectionHeader
            id="experience"
            title="Experience"
            desc="My professional journey."
            className="mb-12 md:mb-20 mt-0"
          />
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Connector Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>

        {/* Education Sub-section — ref triggers the header fade */}
        <div ref={educationRef} className="mt-20 md:mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10"
          >
            Education
          </motion.h3>

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className={cn(
        "bg-card text-card-foreground border-border",
        "hover:border-primary/20 transition-colors duration-300",
        "shadow-sm hover:shadow-md"
      )}>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {experience.company}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {experience.startDate} – {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img src={skill.icon} alt={skill.label} className="w-3.5 h-3.5 object-contain opacity-80" />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className={cn(
        "bg-card text-card-foreground border-border",
        "hover:border-primary/20 transition-colors duration-300",
        "shadow-sm hover:shadow-md"
      )}>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {education.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {education.institution}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {education.startDate} – {education.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className={education.skills ? "space-y-6" : ""}>
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {education.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {education.skills && (
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skillName) => {
                const skill = SKILLS[skillName as SkillNames];
                return (
                  <Badge
                    key={skillName}
                    variant="outline"
                    className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                  >
                    <img src={skill.icon} alt={skill.label} className="w-3.5 h-3.5 object-contain opacity-80" />
                    {skill.label}
                  </Badge>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
