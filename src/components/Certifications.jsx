import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Certificates
            </motion.h2>

            <div className="px-4">
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    infinite={true}
                    arrows={false}
                    keyBoardControl={true}
                    dotListClass="custom-dot-list-style mt-6"
                    itemClass="px-2"
                >
                    {CERTIFICATIONS.map((certificate, index) => (
                        <div
                            key={index}
                            className="mb-8 p-4 rounded-lg shadow-md flex flex-col hover:bg-neutral-900 hover:scale-102 duration-300 justify-between"
                        >
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="rounded w-full object-center mb-4 h-48 cursor-pointer"
                                onClick={() => setSelectedImage(certificate.image)}
                            />
                            <div className="flex flex-col flex-grow">
                                <h6 className="text-lg font-semibold mb-1 text-white">
                                    {certificate.title}{" "}
                                    <span className="text-sm font-normal text-purple-100">- {certificate.issuer}</span>
                                </h6>
                                <p className="text-sm text-neutral-400 mb-2">
                                    Issued on: {certificate.issuedDate}
                                </p>
                                <p className="text-neutral-400 text-sm mb-4 line-clamp-4">
                                    {certificate.description}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href={certificate.certificateLink}
                                        className="inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Click here to access the certificate.
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Modal Preview */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full Certificate"
                        className="rounded shadow-lg max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Certifications;
