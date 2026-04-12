import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const GetinTouch = () => {
  return (
    <div className="pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Get in Touch</motion.h1>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.phoneNo}</motion.p>
        <a
          href="mailto:abhishekchiluveru2004@gmail.com" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default GetinTouch
