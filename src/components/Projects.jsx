import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>

            <div className="px-4">
                <Carousel responsive={responsive} showDots={true} keyBoardControl={true} arrows={false} dotListClass="custom-dot-list-style mt-6" itemClass="px-2">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="mb-6 p-4 rounded-lg shadow-md flex flex-col hover:bg-neutral-900 hover:scale-102 duration-300 justify-between">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded w-full object-center mb-4 h-48" />
                            <div className="flex flex-col flex-grow">
                                <h6 className="text-lg font-semibold mb-2 text-white">{project.title}</h6>
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
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Projects;
