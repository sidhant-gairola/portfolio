import { RiJavaFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Tools & Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <RiJavaFill className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <SiSpringboot className="text-6xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <PiFileSql className="text-6xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <SiMongodb className="text-6xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <SiExpress className="text-6xl text-slate-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <RiNodejsLine className="text-6xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <RiTailwindCssFill className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <FaGitAlt className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3 cursor-pointer">
                    <FaGithub className="text-6xl " />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
