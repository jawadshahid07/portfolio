import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import ThreeModel from "../components/ThreeModel"; // Import the ThreeModel component

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { x: 0, opacity: 1, transition: {duration: 2, delay: delay},},
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 mb-16 lg:mb-35"> {/* Add margin-bottom here */}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1  
                            variants={container(0)}
                            initial="hidden"
                            animate= "visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                                Jawad Shahid
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate= "visible" 
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                                Software Engineer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate= "visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                                {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div 
                    initial={{x: 100, opacity: 0}} animate = {{x: 0, opacity: 1}} transition = {{duration: 2, delay: 2}}
                    className="flex justify-center">
                        <ThreeModel />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default Hero;
