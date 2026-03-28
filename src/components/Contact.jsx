import { CONTACT } from "../constants";
import { motion } from 'framer-motion';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Contact = () => {
    const [visitCount, setVisitCount] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const updateVisitCount = async () => {
            try {
                const response = await fetch('/api/visit-counter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (response.ok) {
                    const data = await response.json();
                    setVisitCount(data.count);
                } else {
                    // Fallback to localStorage if API fails
                    const fallbackCount = Number(localStorage.getItem("portfolio_visit_count") || "0") + 1;
                    localStorage.setItem("portfolio_visit_count", String(fallbackCount));
                    setVisitCount(fallbackCount);
                }
            } catch (error) {
                console.error('Error fetching visit count:', error);
                // Fallback to localStorage if API fails
                const fallbackCount = Number(localStorage.getItem("portfolio_visit_count") || "0") + 1;
                localStorage.setItem("portfolio_visit_count", String(fallbackCount));
                setVisitCount(fallbackCount);
            } finally {
                setIsLoading(false);
            }
        };

        updateVisitCount();
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get In Touch</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-center tracking-tighter">
                <div className="flex flex-wrap justify-center gap-2">
                    <FaLocationDot className="text-xl my-4" />
                    <p className="my-4"> {CONTACT.address}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <IoMailOpenOutline className="text-xl" />
                    <a href="mailto:ssid7074@gmail.com" className="text-blue-400">{CONTACT.email}</a>
                </div>
                <p className="mt-8 text-sm text-neutral-400">
                    Portfolio visits: {isLoading ? "..." : visitCount}
                </p>
            </motion.div>
        </div>
    )
}

export default Contact
