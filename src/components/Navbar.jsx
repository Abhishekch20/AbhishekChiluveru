import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      if (currentScrollY < 40) {
        setIsVisible(true)
      } else if (scrollDelta < -4) {
        setIsVisible(true)
      } else if (scrollDelta > 4) {
        setIsVisible(false)
        setIsMenuOpen(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -140 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-4 top-4 z-[2147483647] isolate rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,rgba(15,15,20,0.78),rgba(38,22,64,0.62))] px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(15,15,20,0.62),rgba(38,22,64,0.45))] md:inset-x-10 lg:inset-x-24"
    >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
                <a href="#home" className="flex items-center gap-4" onClick={() => setIsMenuOpen(false)}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/5 text-base font-bold tracking-tight text-white">
                        AC
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-300">
                        Abhishek
                    </span>
                </a>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    className="flex h-11 w-11 items-center justify-center rounded border border-white/20 text-xl text-white transition hover:bg-white/10 md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-2 text-sm text-neutral-300 md:flex md:flex-row md:flex-wrap md:items-center md:gap-6`}>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded px-3 py-3 transition hover:bg-white/10 hover:text-white md:rounded-full md:py-2"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className={`${isMenuOpen ? "flex" : "hidden"} items-center gap-3 text-xl text-neutral-300 md:flex`}>
                <a className="transition hover:text-white" href="https://github.com/Abhishekch20" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a className="transition hover:text-white" href="https://www.linkedin.com/in/abhishek-chiluveru-a72a37260/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a className="transition hover:text-white" href="https://twitter.com/AbhishekCh119" target="_blank" rel="noreferrer" aria-label="X"><FaSquareXTwitter /></a>
                <a className="transition hover:text-white" href="https://www.instagram.com/abhishekchiluveru_/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
        </div>
    </motion.nav>
    )
}

export default Navbar
