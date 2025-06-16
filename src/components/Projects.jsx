import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-25">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 px-4">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 rounded-lg shadow-md flex flex-col hover:bg-neutral-900 hover:scale-105 duration-500 justify-between"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded w-full object-center mb-4"
                        />
                        <div className="flex flex-col flex-grow">
                            <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
                            <a
                                href={project.link}
                                className="text-blue-400 text-sm font-medium bg-neutral-900 px-2 py-1 rounded w-fit mb-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website Link
                            </a>
                            <p className="text-neutral-400 text-sm mb-4 line-clamp-4">{project.description}</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-purple-400 text-xs font-medium bg-neutral-900 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
