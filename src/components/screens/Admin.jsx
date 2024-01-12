import React from "react";
import styled from "styled-components";

function Admin() {
    return (
        <>
            <>
                <Container>
                    <Heading>Admin</Heading>
                </Container>
            </>
        </>
    );
}

export default Admin;
const Container = styled.div`
    padding: 30px;
    width: 80%;
`;
const Heading = styled.div`
    color: #000;
    font-size: 24px;
    font-weight: 600;
`;
