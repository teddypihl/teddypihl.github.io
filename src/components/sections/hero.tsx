import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { Download } from "lucide-react";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left whitespace-nowrap",
                          "font-thin text-4xl md:text-5xl lg:text-6xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
              </div>
              <BlurIn delay={1.5}>
                <p className={cn(
                  "mt-6 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-zinc-400 font-sans"
                )}>
                  I&apos;m a computer engineering student at Åbo Akademi University, graduating before Christmas &apos;26 with a master&apos;s in computational data analytics. I pick up new things fast and I&apos;m actively looking for an engineering / programming job. Here you&apos;ll find everything from PID controller tools to wind tunnel visualizations. Reach out if you want to chat!
                </p>
              </BlurIn>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <div className="md:self-start flex gap-3 flex-wrap">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>actively looking!</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={"/assets/cv.pdf"}
                    target="_blank"
                    download
                  >
                    <Button variant={"outline"} className="flex items-center gap-2">
                      <Download size={16} />
                      CV
                    </Button>
                  </Link>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
