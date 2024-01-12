import React from "react";
import NavBar from "../includs/NavBar";
import styled from "styled-components";
import Home from "./Home";

function LandingPage() {
    return (
        <>
            <Container>
                <NavBar />
                <Home />
            </Container>
        </>
    );
}

export default LandingPage;

const Container = styled.section`
    display: flex;
    height: 100vh;
`;
