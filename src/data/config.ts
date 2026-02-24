const config = {
  title: "Karl-Theodor Pihl | Computer Engineering Student",
  description: {
    long: "Explore the portfolio of Karl-Theodor Pihl, a computer engineering student at Åbo Akademi University specializing in computational data analytics. Discover projects ranging from PID control simulations to wind tunnel visualizations and developer tools. Let's build something amazing together!",
    short:
      "Portfolio of Karl-Theodor Pihl, a computer engineering student building practical tools and interactive web experiences.",
  },
  keywords: [
    "Karl-Theodor Pihl",
    "teddypihl",
    "portfolio",
    "computer engineering",
    "Åbo Akademi",
    "computational data analytics",
    "web development",
    "React",
    "TypeScript",
    "Three.js",
    "Python",
    "FastAPI",
    "PID Lab",
    "Wind Tunnel",
    "FixVault",
    "Tiny Run Router",
  ],
  author: "Karl-Theodor Pihl",
  email: "teddypihl@outlook.com",
  site: "https://teddypihl.github.io",

  // for github stars button
  githubUsername: "teddypihl",
  githubRepo: "teddypihl.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/teddypihl",
    linkedin: "https://github.com/teddypihl",
    instagram: "https://github.com/teddypihl",
    facebook: "https://github.com/teddypihl",
    github: "https://github.com/teddypihl",
  },
};
export { config };
