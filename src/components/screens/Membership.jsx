import React from "react";
import styled from "styled-components";

function Membership() {
    return (
        <>
            <Container>
                <Heading>Membership</Heading>
            </Container>
        </>
    );
}

export default Membership;
const Container = styled.div`
    padding: 30px;
    width: 80%;
`;
const Heading = styled.div`
    color: #000;
    font-size: 24px;
    font-weight: 600;
`;
