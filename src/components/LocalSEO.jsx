import { motion } from "framer-motion"

const services = [
    "Business Websites",
    "Shopify Store Development",
    "WordPress Development",
    "WooCommerce Stores",
    "Digital Marketing",
    "WhatsApp Automation",
    "Chatbots",
    "Calling Bots",
    "Custom Web Apps",
    "Lead Capture Systems",
]

const locations = [
    "Warangal",
    "Hyderabad",
    "Khammam",
    "Karimnagar",
    "Hanamkonda",
    "Kazipet",
    "Telangana",
]

const LocalSEO = () => {
    return (
        <section id="services" className="relative overflow-hidden scroll-mt-28 border-b border-neutral-900 px-6 py-20 md:px-12 lg:px-28">
            <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_84%_12%,rgba(132,204,22,0.12),transparent_30%)]" aria-hidden="true" />

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
                            Services
                        </p>
                        <h2 className="text-3xl font-black uppercase tracking-[0.06em] text-white md:text-4xl">
                            Shopify, Web Development, Marketing & Automation
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-neutral-400">
                        I help local businesses build Shopify stores, WordPress and WooCommerce websites, generate better leads, and automate customer conversations across WhatsApp, chat, and call workflows.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 36 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="border-t border-white/15 pt-7"
                    >
                        <h3 className="text-xl font-black uppercase tracking-[0.06em] text-white">
                            Solutions I Build
                        </h3>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="border border-white/15 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-neutral-200"
                                >
                                    {service}
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
                        <h3 className="text-xl font-black uppercase tracking-[0.06em] text-white">
                            Serving Telangana
                        </h3>
                        <p className="mt-6 text-sm leading-7 text-neutral-400">
                            Available for Shopify store development, WordPress and WooCommerce websites, digital marketing, WhatsApp automation, chatbot setup, calling bot automation, and custom business automation projects in:
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            {locations.map((location) => (
                                <span
                                    key={location}
                                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-cyan-200"
                                >
                                    {location}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default LocalSEO
