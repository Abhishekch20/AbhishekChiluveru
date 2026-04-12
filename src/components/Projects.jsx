import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const priorityProjects = ["NewNet", "Moonglade", "RenewHouse", "Urban Psychotic"];
    const orderedProjects = [...PROJECTS].sort((firstProject, secondProject) => {
        const firstIndex = priorityProjects.findIndex((title) => firstProject.title.includes(title));
        const secondIndex = priorityProjects.findIndex((title) => secondProject.title.includes(title));

        if (firstIndex === -1 && secondIndex === -1) return 0;
        if (firstIndex === -1) return 1;
        if (secondIndex === -1) return -1;

        return firstIndex - secondIndex;
    });
    const visibleProjects = showAllProjects ? orderedProjects : orderedProjects.slice(0, 4);

    return (
        <section id="projects" className="relative z-0 overflow-hidden scroll-mt-28 border-b border-neutral-900 px-6 py-20 md:px-12 lg:px-28">
            <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_22%_8%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(168,85,247,0.16),transparent_32%)]" aria-hidden="true" />

            <div className="mx-auto max-w-6xl">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 36 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.4em] text-cyan-300">
                            Selected Work
                        </p>
                        <h1 className="text-3xl font-black uppercase tracking-[0.28em] text-white md:text-4xl">
                            Projects
                        </h1>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <p className="max-w-xl text-sm leading-7 text-neutral-400">
                            A mix of full-stack apps, WordPress builds, Shopify work, and machine learning projects.
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowAllProjects((current) => !current)}
                            className="hidden shrink-0 rounded border border-white/20 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-neutral-950 sm:block"
                        >
                            {showAllProjects ? "Less" : "More"} <span aria-hidden="true">-&gt;</span>
                        </button>
                    </div>
                </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
                {visibleProjects.map((project, index) => {
                    const projectLink = project.website && project.website !== "https://" ? project.website : project.github;

                    return (
                        <motion.article
                            key={project.title}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group relative z-0 border-t border-white/15 pt-7"
                        >
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-0 block overflow-hidden rounded border border-white/10 bg-white/[0.03]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-0 h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
                                />
                            </a>

                            <div className="mt-6 flex items-start justify-between gap-5">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white">
                                            {project.title}
                                        </h2>
                                        {project.status && (
                                            <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-emerald-300">
                                                {project.status}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="shrink-0 text-sm font-black text-cyan-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <p className="mt-4 min-h-24 text-sm leading-7 text-neutral-400">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.slice(0, 5).map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-neutral-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6">
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded border border-cyan-300/70 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-neutral-950"
                                >
                                    Live Site <span aria-hidden="true">-&gt;</span>
                                </a>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

            {orderedProjects.length > 4 && (
                <button
                    type="button"
                    onClick={() => setShowAllProjects((current) => !current)}
                    className="mx-auto mt-14 flex rounded border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-neutral-950 sm:hidden"
                >
                    {showAllProjects ? "Show Less" : "Show More"}
                </button>
            )}
            </div>
        </section>
    );
};

export default Projects;
