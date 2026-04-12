import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"
import resumeFile from "../assets/Abhishek_Chiluveru.Resume.pdf"

const container = (delay) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <section id="home" className="relative isolate flex min-h-[90vh] scroll-mt-28 items-center overflow-hidden border-b border-neutral-900 bg-black pt-24 lg:min-h-[100vh] lg:pt-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_12%,rgba(0,245,255,0.28),transparent_22%),radial-gradient(circle_at_86%_8%,rgba(124,58,237,0.45),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(0,245,255,0.38),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(168,85,247,0.35),transparent_28%)]" aria-hidden="true" />
            <div className="absolute -left-24 -top-20 -z-10 h-80 w-[38rem] rounded-[48%] bg-black shadow-[0_0_0_2px_rgba(34,211,238,0.35)]" aria-hidden="true" />
            <div className="absolute -right-32 -top-28 -z-10 h-80 w-[36rem] rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.85),rgba(37,99,235,0.55))] blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-36 left-1/2 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.75),rgba(34,211,238,0.75))] blur-xl" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden="true" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-24">
                <motion.div
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-6xl px-2"
                >
                    <h1
                        className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-2 text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[1.15] sm:gap-x-3"
                        style={{ fontFamily: '"Press Start 2P", cursive', fontWeight: 400 }}
                    >
                        <span
                            className="text-transparent"
                            style={{
                                WebkitTextStroke: "2px rgba(255,255,255,0.95)",
                                textShadow: "1px 1px 0 rgba(255,255,255,0.55), -1px 0 0 rgba(255,255,255,0.35)",
                            }}
                        >
                            Abhishek
                        </span>
                        <span
                            className="text-transparent"
                            style={{
                                WebkitTextStroke: "2px #8bff2a",
                                textShadow: "1px 1px 0 rgba(255,255,255,0.55), -1px 0 0 rgba(255,255,255,0.35)",
                            }}
                        >
                            Chiluveru
                        </span>
                    </h1>

                    <motion.h2
                        variants={container(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mt-7 max-w-4xl text-xs font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-base lg:text-xl"
                    >
                        Full-Stack & WordPress Developer
                    </motion.h2>

                    <motion.p
                        variants={container(0.8)}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mt-7 max-w-3xl text-sm font-medium leading-7 text-neutral-400 sm:text-base"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.div
                        variants={container(1.2)}
                        initial="hidden"
                        animate="visible"
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <a
                            href={resumeFile}
                            download
                            className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-neutral-200"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                                <FaDownload />
                            </span>
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex border border-cyan-300/70 px-9 py-4 text-sm font-bold text-white transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-neutral-950"
                        >
                            Let&apos;s get in touch!
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
