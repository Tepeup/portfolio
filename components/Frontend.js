import React from "react";
import styles from "../styles/Home.module.css";
import Card from "./Card";

export default function Projects() {
  const projectsInformation = [
    {
      title: "Sunnyside Agenct",
      href: "https://sunnyside-agency-nu.vercel.app/",
      alt: "Sunnyside Agency",
      image: "/sunnyside.png",
      description: [
        "PSD to HTML",
        "Employs CSS Grid, Flexbox, and styled components.",
        "Uses component architecture for the testimonials and description boxes.",
        "Responsive layout, mobile first design.",
      ],
      gitname: "Tepeup/Sunnyside-Agency",
      gitlink: "https://github.com/Tepeup/Sunnyside-Agency",
      website: "sunnyside-agency.vercel.app",
    },
    {
      title: "Portfolio Website",
      href: "https://tepeupotter.com/",
      alt: "Portfolio Website",
      image: "/portfolio.png",
      description: [
        "Meta: My portfolio website written in react using Next.js.",
        "Responsive layout with component heavy architecture.",
        "Button animations done using animate.css.",
      ],
      gitname: "Tepeup/portfolio",
      gitlink: "https://github.com/Tepeup/portfolio",
      website: "www.tepeupotter.com",
    },
    {
      title: "Best Picture Nominator",
      href: "https://the-shoppies-beryl.vercel.app/",
      alt: "Best Picture Nominator",
      image: "/theshoppies.png",
      description: [
        "Shopify developer challenge submission for the frontend of a movie award nomination website.",
        "Uses OMDb API for movie information.",
        "UI inspired by HBO Max.",
      ],
      gitname: "Tepeup/The-Shoppies",
      gitlink: "https://github.com/Tepeup/The-Shoppies",
      website: "the-shoppies.vercel.app",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.grid} id={styles.frontend}>
        {projectsInformation.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              href={project.href}
              alt={project.alt}
              image={project.image}
              description={project.description}
              gitname={project.gitname}
              gitlink={project.gitlink}
              website={project.website}
            />
          );
        })}
      </div>
    </main>
  );
}
