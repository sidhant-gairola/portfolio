import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px down
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50 hover:bg-white hover:text-blue-600 transition-colors duration-150"
                    initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                    animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
                    exit={{ opacity: 0, y: 50 }}     // Fade out and slide down
                    transition={{ duration: 0.3 }}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={15} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default GoToTopButton;