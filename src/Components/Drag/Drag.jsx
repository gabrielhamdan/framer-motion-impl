import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import SetaVoltar from "../SetaVoltar/SetaVoltar";

export default function MyComponent() {
    const constraintsRef = useRef(null);

    const [count, setCount] = useState(0);

    return (
        <>
        <SetaVoltar />
        <div className="title">
            <h1>Drag</h1>
            <motion.i whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <FontAwesomeIcon icon={faRotateRight} className="refresh-btn" onClick={() => setCount(count + 1)} />
            </motion.i>
        </div>

        <motion.div ref={constraintsRef} className="drag-area"/>

        <div className="quadrado">
            <motion.div key={count}
            drag
            dragConstraints={constraintsRef}
            />
        </div>
        </>
    );
}