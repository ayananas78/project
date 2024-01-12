import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../screens/LandingPage";
import Admin from "../../screens/Admin";
import Advocate from "../../screens/Advocate";
import Membership from "../../screens/Membership";
import NavBar from "../../includs/NavBar";
import styled from "styled-components";

function AppRouter() {
    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/advocate" element={<Advocate />} />
                <Route path="/membership" element={<Membership />} />
            </Routes>
        </Container>
    );
}

export default AppRouter;

const Container = styled.section`
    display: flex;
    height: 100vh;
`;
