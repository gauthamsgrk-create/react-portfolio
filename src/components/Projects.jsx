const projects = [
  {
    title: "ShoppingKart",
    description: "Responsive e-commerce interface with product browsing and cart-focused UI.",
    tech: "React, JavaScript, CSS, Vite",
    link: "https://shopping-kart-one-blue.vercel.app/"
  },
  {
    title: "Job Finder",
    description: "Job-search interface designed to help users explore job opportunities.",
    tech: "React, JavaScript, CSS",
    link: "https://job-finder-eight-red.vercel.app/"
  },
  {
    title: "Subbu Tech",
    description: "E-commerce frontend for smartphones and accessories with responsive layouts.",
    tech: "HTML, CSS, JavaScript",
    link: "https://subbu-tech.vercel.app/"
  }
];

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-placeholder" aria-hidden="true">{"</>"}</div>
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
            <a href={project.link} target="_blank" rel="noreferrer">View Project ↗</a>
          </div>
        </article>
      ))}
    </div>
  );
}