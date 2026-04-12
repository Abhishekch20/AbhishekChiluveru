import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const aboutHighlights = [
    "Full-Stack Development",
    "WordPress Builds",
    "Data Analytics",
    "Machine Learning",
]

const aboutParagraphs = ABOUT_TEXT.split("\n\n")

const paragraphVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.025,
        },
    },
}

const wordVariants = {
    hidden: {
        opacity: 0,
        y: 14,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
}

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden scroll-mt-28 border-b border-neutral-900 px-6 py-20 md:px-12 lg:px-28">
            <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_78%_12%,rgba(168,85,247,0.14),transparent_34%)]" aria-hidden="true" />

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
                            Profile
                        </p>
                        <h1 className="text-3xl font-black uppercase tracking-[0.28em] text-white md:text-4xl">
                            About Me
                        </h1>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-neutral-400">
                        I build across web development, WordPress, analytics, and machine learning with a practical, product-focused mindset.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 36 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="border-t border-white/15 pt-7"
                    >
                        <h2 className="text-xl font-black uppercase tracking-[0.18em] text-white">
                            Focus Areas
                        </h2>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {aboutHighlights.map((highlight, index) => (
                                <div
                                    key={highlight}
                                    className="flex items-center justify-between border border-white/15 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-neutral-200"
                                >
                                    <span>{highlight}</span>
                                    <span className="text-xs font-black text-cyan-300">0{index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 36 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="border-t border-white/15 pt-7"
                    >
                        <h2 className="text-xl font-black uppercase tracking-[0.18em] text-white">
                            What I Do
                        </h2>
                        <div className="mt-6 space-y-6 text-base leading-8 text-neutral-400">
                            {aboutParagraphs.map((paragraph) => (
                                <motion.p
                                    key={paragraph}
                                    variants={paragraphVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.7 }}
                                >
                                    {paragraph.split(" ").map((word, index) => (
                                        <motion.span
                                            key={`${word}-${index}`}
                                            variants={wordVariants}
                                            className="inline-block"
                                        >
                                            {word}
                                            {index < paragraph.split(" ").length - 1 ? "\u00A0" : ""}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
