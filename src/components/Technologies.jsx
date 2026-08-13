import { motion } from "framer-motion"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FaNodeJs, FaCss3Alt, FaJsSquare, FaBootstrap, FaPython, FaGitAlt, FaGithub } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa6"
import { SiMysql, SiMongodb, SiExpress, SiTensorflow, SiGooglecolab, SiJupyter, SiScikitlearn, SiShopify } from "react-icons/si"
import { IoLogoFigma, IoLogoWordpress } from "react-icons/io5"
import { VscVscode } from "react-icons/vsc"

const technologyGroups = [
    {
        title: "Frontend",
        description: "Interfaces, layouts, and responsive user experiences.",
        items: [
            { label: "React.js", icon: RiReactjsLine, color: "text-cyan-400" },
            { label: "HTML", icon: FaHtml5, color: "text-orange-500" },
            { label: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
            { label: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
            { label: "Bootstrap", icon: FaBootstrap, color: "text-violet-500" },
            { label: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
        ],
    },
    {
        title: "Backend",
        description: "APIs, server logic, and database-backed applications.",
        items: [
            { label: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { label: "Express.js", icon: SiExpress, color: "text-white" },
            { label: "MySQL", icon: SiMysql, color: "text-yellow-400" },
            { label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        ],
    },
    {
        title: "Machine Learning",
        description: "Data workflows, model building, and intelligent systems.",
        items: [
            { label: "Python", icon: FaPython, color: "text-amber-300" },
            { label: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
            { label: "Google Colab", icon: SiGooglecolab, color: "text-orange-500" },
            { label: "Jupyter", icon: SiJupyter, color: "text-orange-600" },
            { label: "Scikit-Learn", icon: SiScikitlearn, color: "text-cyan-500" },
        ],
    },
    {
        title: "Tools & Platforms",
        description: "CMS, eCommerce, design, and developer workflow tools.",
        items: [
            { label: "Git", icon: FaGitAlt, color: "text-orange-500" },
            { label: "GitHub", icon: FaGithub, color: "text-white" },
            { label: "VS Code", icon: VscVscode, color: "text-blue-500" },
            { label: "Figma", icon: IoLogoFigma, color: "text-green-300" },
            { label: "WordPress", icon: IoLogoWordpress, color: "text-sky-400" },
            { label: "Shopify", icon: SiShopify, color: "text-green-500" },
        ],
    },
]

const Technologies = () => {
    return (
        <section className="relative overflow-hidden border-b border-neutral-900 px-6 py-20 md:px-12 lg:px-28">
            <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.18),transparent_32%)]" aria-hidden="true" />

            <div className="mx-auto max-w-6xl">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 36 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                            My Stack
                        </p>
                        <h1 className="text-3xl font-black uppercase tracking-[0.06em] text-white md:text-4xl">
                            Technologies
                        </h1>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-neutral-400">
                        A practical toolkit for building full-stack web apps, WordPress sites, data-driven workflows, and machine learning experiments.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {technologyGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 36 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.25 }}
                            className="border-t border-white/15 pt-7"
                        >
                            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h2 className="text-xl font-black uppercase tracking-[0.06em] text-white">
                                        {group.title}
                                    </h2>
                                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                                        {group.description}
                                    </p>
                                </div>
                                <span className="text-sm font-black text-cyan-300">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <div
                                            key={item.label}
                                            className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-neutral-200 transition hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-white"
                                        >
                                            <Icon className={item.color} size={18} />
                                            {item.label}
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies
