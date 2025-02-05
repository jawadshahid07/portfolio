import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Certifications
            </motion.h1>
            <div>
                {CERTIFICATIONS.map((certification, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 2 }}
                            className="w-full lg:w-1/4"
                        >
                            <img 
                                src={certification.image} 
                                width={150} 
                                height={150} 
                                alt={certification.title} 
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 2 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                <a href={certification.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {certification.title}
                                </a>
                            </h6>
                            <p className="mb-4 text-neutral-400">{certification.provider}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;