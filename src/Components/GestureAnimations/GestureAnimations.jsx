import React from "react";
import { motion } from "framer-motion";
import SetaVoltar from "../SetaVoltar/SetaVoltar";

export default function GestureAnimations() {
    return (
        <>
        <SetaVoltar />
        <div className="title">
            <h1>Gesture Animation</h1>
        </div>
        <div className="quadrado">

            <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                />
        </div>
        </>
    );
}