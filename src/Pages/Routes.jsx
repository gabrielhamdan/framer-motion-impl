import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DragPage from "./DragPage";
import GestureAnimationsPage from "./GestureAnimationsPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/drag" element={<DragPage />}/>
                <Route path="/gesture-animations" element={<GestureAnimationsPage />}/>
            </Routes>
        </BrowserRouter>
    );
}