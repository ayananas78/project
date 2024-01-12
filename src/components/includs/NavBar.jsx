import React from "react";
import styled from "styled-components";

function NavBar() {
    return (
        <>
            <Container>
                <LogoContainer>
                    <Logo>
                        <img
                            src={require("../../assets/logo.png")}
                            alt="LOGO"
                        />
                    </Logo>
                </LogoContainer>
                <MenuItems>
                    <Item>
                        <Select>
                            <ItemImage>
                                <img
                                    src={require("../../assets/home.png")}
                                    alt="HOME"
                                />
                            </ItemImage>
                            <ItemName>Home</ItemName>
                        </Select>
                    </Item>
                    <Item>
                        <Select>
                            <ItemImage>
                                <img
                                    src={require("../../assets/admin.png")}
                                    alt="Admin"
                                />
                            </ItemImage>
                            <ItemName>Admin</ItemName>
                        </Select>
                    </Item>
                    <Item>
                        <Select>
                            <ItemImage>
                                <img
                                    src={require("../../assets/membership.png")}
                                    alt="Membership"
                                />
                            </ItemImage>
                            <ItemName>Membership</ItemName>
                        </Select>
                    </Item>
                    <Item>
                        <Select>
                            <ItemImage>
                                <img
                                    src={require("../../assets/advocate.png")}
                                    alt="Advocate"
                                />
                            </ItemImage>
                            <ItemName>Advocate</ItemName>
                        </Select>
                    </Item>
                </MenuItems>
                <Log>
                    <LogImage>
                        <img
                            src={require("../../assets/logout.png")}
                            alt="Logout"
                        />
                    </LogImage>
                    <LogText>Logout</LogText>
                </Log>
            </Container>
        </>
    );
}

export default NavBar;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #6941c6;
    width: 20%;
`;
const LogoContainer = styled.div``;
const Logo = styled.div`
    width: 80px;
    margin: 0 auto;

    img {
        display: block;
        width: 100%;
    }
`;
const MenuItems = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    margin: 0 auto;
`;
const Item = styled.li`
    margin-bottom: 40px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const Select = styled.div`
    cursor: pointer;

    display: flex;
    align-items: center;
`;
const ItemImage = styled.div`
    width: 25px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const ItemName = styled.span`
    display: block;
    color: #fff;
`;
const Log = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
const LogImage = styled.div`
    margin-right: 2opx;
    img {
        display: block;
        width: 100%;
    }
`;
const LogText = styled.span`
    display: block;
    color: #fff;
`;
