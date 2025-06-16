import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="border-b border-neutral-900 pb-25">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Certificates
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 px-4">
                {CERTIFICATIONS.map((certificate, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 rounded-lg shadow-md flex flex-col hover:bg-neutral-900 hover:scale-105 duration-500 justify-between"
                    >
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="rounded w-full object-center mb-4 cursor-pointer"
                            onClick={() => setSelectedImage(certificate.image)}
                        />
                        <div className="flex flex-col flex-grow">
                            <h6 className="text-lg font-semibold mb-1">
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
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full Certificate"
                        className="rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the image
                    />
                </div>
            )}
        </div>
    );
};

export default Certifications;
