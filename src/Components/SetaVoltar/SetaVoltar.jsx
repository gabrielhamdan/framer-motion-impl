import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import './SetaVoltar.css'

export default function SetaVoltar() {
    const animacao = {
        rest: { rotate: 0 },
        hover: { left: 25, transition: { duration: 0.4 } }
    }

    return (
        <motion.div variants={animacao} className="seta-container" whileHover="hover">
            <FontAwesomeIcon icon={faArrowLeft} className="seta" />
        </motion.div>
    )
}