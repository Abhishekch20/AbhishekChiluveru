import React, { useState } from 'react'
import { motion } from "framer-motion"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [statusMessage, setStatusMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch("https://formsubmit.co/ajax/abhishekchiluveru1@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New portfolio contact form message",
                    _template: "table",
                }),
            })

            if (!response.ok) {
                throw new Error("FormSubmit request failed")
            }

            setStatusMessage('Message sent successfully!')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('FAILED...', error)
            setStatusMessage('Failed to send the message. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="relative overflow-hidden scroll-mt-28 border-b border-neutral-900 px-6 py-20 md:px-12 lg:px-28">
            <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_25%_10%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.16),transparent_32%)]" aria-hidden="true" />

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
                            Contact
                        </p>
                        <h1 className="text-3xl font-black uppercase tracking-[0.06em] text-white md:text-4xl">
                            Let&apos;s Talk
                        </h1>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-neutral-400">
                        Send a project idea, freelance inquiry, or collaboration note. I&apos;ll get back to you soon.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 36 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2"
                >
                    <div className="border-b border-white/20 pb-4">
                        <label className="block text-xs font-black uppercase tracking-[0.08em] text-neutral-500" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="mt-4 w-full bg-transparent text-base text-white outline-none placeholder:text-neutral-700"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            id="name"
                            aria-label="Name"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="border-b border-white/20 pb-4">
                        <label className="block text-xs font-black uppercase tracking-[0.08em] text-neutral-500" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mt-4 w-full bg-transparent text-base text-white outline-none placeholder:text-neutral-700"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            id="email"
                            aria-label="Email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="border-b border-white/20 pb-4 lg:col-span-2">
                        <label className="block text-xs font-black uppercase tracking-[0.08em] text-neutral-500" htmlFor="message">
                            Query
                        </label>
                        <textarea
                            className="mt-4 min-h-32 w-full resize-none bg-transparent text-base leading-7 text-white outline-none placeholder:text-neutral-700"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            id="message"
                            aria-label="Query"
                            placeholder="Tell me what you want to build"
                        />
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-fit rounded border border-cyan-300/70 px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? 'Sending' : 'Send'}
                        </button>

                        {statusMessage && (
                            <p className="text-sm font-semibold text-neutral-400">
                                {statusMessage}
                            </p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
