import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

            setScrollProgress(progress)
            setIsVisible(scrollTop > 300)
        }

        updateScrollProgress()
        window.addEventListener("scroll", updateScrollProgress, { passive: true })
        window.addEventListener("resize", updateScrollProgress)

        return () => {
            window.removeEventListener("scroll", updateScrollProgress)
            window.removeEventListener("resize", updateScrollProgress)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const radius = 24
    const circumference = 2 * Math.PI * radius
    const strokeOffset = circumference - (scrollProgress / 100) * circumference

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950/90 text-white shadow-2xl shadow-black/50 backdrop-blur transition duration-300 hover:scale-105 hover:text-cyan-200 ${
                isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
            }`}
        >
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="3"
                />
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke="rgb(34,211,238)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                />
            </svg>
            <FaArrowUp className="relative z-10 text-sm" />
        </button>
    )
}

export default ScrollToTop
