// Technologies.js
import { TECHNOLOGIES } from "../constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    animate: {
        y: [0, 20, 0], 
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 2 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {TECHNOLOGIES.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={iconVariants(tech.duration)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <IconComponent className={`text-7xl ${tech.color}`} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default Technologies;
