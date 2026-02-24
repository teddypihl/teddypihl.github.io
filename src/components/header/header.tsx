"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { useLenis } from "@/lib/lenis";

interface HeaderProps {
  loader?: boolean;
}

const NAV_LINKS = [
  { label: "Projects", href: "projects" },
  { label: "Stack", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

const Header = ({ loader }: HeaderProps) => {
  const lenis = useLenis(() => {});

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.5 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{ background: "transparent" }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: loader ? 3.5 : 0, duration: 0.8 }}
    >
      <div className="flex items-center justify-between w-full px-1">
        {/* Left: name */}
        <Link href="/" className="flex items-center justify-center flex-shrink-0">
          <Button variant={"link"} className="text-md">
            {config.author}
          </Button>
        </Link>

        {/* Center: nav links */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-normal text-muted-foreground hover:text-foreground h-7 px-3 rounded-md hover:bg-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: theme toggle */}
        <FunnyThemeToggle className="w-6 h-6 flex-shrink-0" />
      </div>
    </motion.header>
  );
};

export default Header;
