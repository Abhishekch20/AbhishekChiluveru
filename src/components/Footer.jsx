import { motion } from "framer-motion"

const footerColumns = [
    {
        title: "The Good",
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        title: "The Boring",
        links: [
            { label: "Email", href: "mailto:abhishekchiluveru2004@gmail.com" },
            { label: "Call", href: "tel:+919398379060" },
            { label: "GitHub", href: "https://github.com/Abhishekch20" },
        ],
    },
    {
        title: "The Cool",
        links: [
            { label: "Instagram", href: "https://www.instagram.com/abhishekchiluveru_/" },
            { label: "GitHub", href: "https://github.com/Abhishekch20" },
            { label: "Contact Me", href: "#contact" },
        ],
    },
]

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="mx-4 mb-16 rounded-[2rem] border border-white/10 bg-neutral-950/80 px-6 py-10 shadow-2xl shadow-black/50 backdrop-blur md:mx-10 md:px-12 lg:mx-24 lg:px-16"
        >
            <div className="grid gap-10 md:grid-cols-[auto_1fr_1fr_1fr]">
                <a
                    href="#home"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/5 text-base font-bold tracking-tight text-white"
                    aria-label="Back to home"
                >
                    AC
                </a>

                {footerColumns.map((column) => (
                    <div key={column.title}>
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
                            {column.title}
                        </h2>
                        <div className="flex flex-col gap-4 text-neutral-300">
                            {column.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                    className="w-fit transition hover:translate-x-1 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">
                        Full-Stack & WordPress Developer
                    </p>
                    <h2 className="text-4xl font-black tracking-normal text-white sm:text-6xl lg:text-6xl">
                        AbhishekChiluveru
                    </h2>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    Copyright 2026 Abhishek. All rights reserved.
                </p>
            </div>
        </motion.footer>
    )
}

export default Footer
