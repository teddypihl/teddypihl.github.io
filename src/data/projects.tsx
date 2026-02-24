import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  RiNodejsFill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiDocker,
  SiFastapi,
  SiLeaflet,
  SiNpm,
  SiPython,
  SiSqlite,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  leaflet: {
    title: "Leaflet",
    bg: "black",
    fg: "white",
    icon: <SiLeaflet />,
  },
  npm: {
    title: "npm",
    bg: "black",
    fg: "white",
    icon: <SiNpm />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "fixvault",
    category: "Dev Tool · CLI · SQLite",
    title: "FixVault",
    description: "Save errors + what fixed them. Find the fix instantly next time.",
    src: "/assets/projects-screenshots/fixvault/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.npm],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.sqlite],
    },
    live: "https://www.npmjs.com/package/fixvault",
    github: "https://github.com/teddypihl/fixvault",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Save errors + what fixed them. Find the fix instantly next time.
          </TypographyP>
          <TypographyP className="font-mono">
            FixVault is a CLI developer tool that lets you save errors and their
            solutions locally, then instantly retrieve them with fuzzy search.
            Built with Node.js and TypeScript, it stores everything in a local
            SQLite database — no cloud, no signup, just fast recall of what
            actually worked.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Pipe-first UX</TypographyH3>
          <p className="font-mono mb-2">
            Pipe your error message directly into FixVault from the terminal.
            No copying, no switching context — just{" "}
            <code>cmd 2&gt;&amp;1 | fixvault save</code>.
          </p>
          <TypographyH3 className="my-4 mt-8">Fuzzy Search</TypographyH3>
          <p className="font-mono mb-2">
            Powered by Fuse.js, the search is forgiving. Type a rough
            description of your error and FixVault surfaces the closest match
            from your personal fix history.
          </p>
          <TypographyH3 className="my-4 mt-8">SQLite Storage</TypographyH3>
          <p className="font-mono mb-2">
            All fixes are stored locally with better-sqlite3. Fast, offline,
            and yours. No external dependencies to manage, no data leaving your
            machine.
          </p>
        </div>
      );
    },
  },
  {
    id: "pid-lab",
    category: "Control · Simulation · React",
    title: "PID Lab",
    description: "Simulink-style PID controller playground in the browser.",
    src: "/assets/projects-screenshots/pid-lab/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    live: "https://teddypihl.github.io/pid-lab/",
    github: "https://github.com/teddypihl/pid-lab",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Simulink-style PID playground in the browser.
          </TypographyP>
          <TypographyP className="font-mono">
            PID Lab is an interactive control systems tool built with React and
            TypeScript. Drag-and-drop a block diagram, tune your P/PI/PID
            controller, and watch the simulation respond in real time — all
            without leaving the browser.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Block-diagram Editor</TypographyH3>
          <p className="font-mono mb-2">
            Wire up controller blocks visually, similar to Simulink. Connect
            setpoints, controllers, and plant models with a drag-and-drop
            interface.
          </p>
          <TypographyH3 className="my-4 mt-8">First-order Simulation</TypographyH3>
          <p className="font-mono mb-2">
            Simulates a first-order plant model in real time. Watch the step
            response chart update live as you adjust parameters.
          </p>
          <TypographyH3 className="my-4 mt-8">P / PI / PID Control</TypographyH3>
          <p className="font-mono mb-2">
            Switch between proportional, proportional-integral, and full PID
            control modes. Each mode updates the simulation instantly.
          </p>
          <TypographyH3 className="my-4 mt-8">Performance Metrics</TypographyH3>
          <p className="font-mono mb-2">
            Rise time, settling time, overshoot, and steady-state error are
            computed and displayed automatically for every simulation run.
          </p>
        </div>
      );
    },
  },
  {
    id: "windtunnel",
    category: "Aero · Visualization · Three.js",
    title: "Wind Tunnel",
    description: "Real-time airflow visualization around a 3D car and wings in the browser.",
    src: "/assets/projects-screenshots/windtunnel/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
      ],
      backend: [],
    },
    live: "https://teddypihl.github.io/windtunnel/",
    github: "https://github.com/teddypihl/windtunnel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time airflow visualization around a simplified car + wings.
          </TypographyP>
          <TypographyP className="font-mono">
            Wind Tunnel is a browser-based aerodynamic visualization tool built
            with TypeScript, React, and Three.js via react-three-fiber. Thousands
            of instanced particles flow around a 3D car model in real time, with
            interactive controls to adjust the simulation parameters.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Instanced Particles</TypographyH3>
          <p className="font-mono mb-2">
            Renders thousands of airflow particles efficiently using Three.js
            instanced meshes, keeping performance smooth even on complex scenes.
          </p>
          <TypographyH3 className="my-4 mt-8">Flow Field Components</TypographyH3>
          <p className="font-mono mb-2">
            The flow field is computed from simplified aerodynamic equations,
            producing realistic-looking streamlines around the car body and
            adjustable wing elements.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Parameters</TypographyH3>
          <p className="font-mono mb-2">
            Adjust wind speed, wing angle, and other parameters on the fly.
            The visualization updates in real time, making it great for
            exploring how aerodynamic changes affect airflow patterns.
          </p>
        </div>
      );
    },
  },
  {
    id: "tiny-run-router",
    category: "Maps · Algorithms · FastAPI",
    title: "Tiny Run Router",
    description: "Generate running loops on real streets, then drag and re-snap waypoints to the road network.",
    src: "/assets/projects-screenshots/tiny-run-router/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.leaflet],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://teddypihl.github.io/tiny-run-router/",
    github: "https://github.com/teddypihl/tiny-run-router",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Generate running loops on real streets, then edit and snap back to
            the road network.
          </TypographyP>
          <TypographyP className="font-mono">
            Tiny Run Router generates circular running routes on real street
            networks. Built with Python, FastAPI, and OSMnx on the backend, and
            Leaflet on the frontend, it lets you pick a starting point, choose a
            target distance, and get a loop optimized for runnable paths — then
            drag waypoints and re-snap them back to real roads.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Graph Routing</TypographyH3>
          <p className="font-mono mb-2">
            Uses OSMnx to fetch real OpenStreetMap road networks and NetworkX
            to find optimal loop routes that respect actual street topology.
          </p>
          <TypographyH3 className="my-4 mt-8">Loop Search</TypographyH3>
          <p className="font-mono mb-2">
            Searches for circular routes close to a target distance, avoiding
            out-and-back paths so every run feels like a proper loop.
          </p>
          <TypographyH3 className="my-4 mt-8">Map UX</TypographyH3>
          <p className="font-mono mb-2">
            Built with Leaflet for a smooth, interactive map experience. Click
            to set your start point, view the generated route, and drag
            waypoints to customize it.
          </p>
          <TypographyH3 className="my-4 mt-8">Backend Re-snap</TypographyH3>
          <p className="font-mono mb-2">
            After dragging a waypoint, the backend re-snaps it to the nearest
            valid road node and recalculates the surrounding route segments —
            keeping the loop on real, runnable paths.
          </p>
        </div>
      );
    },
  },
];

export default projects;
