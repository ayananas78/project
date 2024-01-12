import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../screens/LandingPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    );
}

export default AppRouter;
