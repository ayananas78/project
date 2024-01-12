import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
    const active_data = [
        {
            id: 1,
            name: "Manoj",
            enrollment: "LP/1245/22",
            plan: "6 months",
            amount: "12000",
            paid: "2023-12-06",
            membership: "Approved",
        },
        {
            id: 2,
            name: "Binoy",
            enrollment: "LP/1245/22",
            plan: "4 months",
            amount: "8000",
            paid: "2023-12-06",
            membership: "Approved",
        },
        {
            id: 3,
            name: "Sanju",
            enrollment: "LP/1245/22",
            plan: "1 months",
            amount: "2000",
            paid: "2023-12-06",
            membership: "Approved",
        },
    ];
    const pending_data = [
        {
            id: 1,
            name: "Manoj",
            enrollment: "LP/1245/22",
            plan: "12 months",
            amount: "2000",
            paid: "2023-12-06",
            membership: "Pending",
        },
        {
            id: 2,
            name: "Binoy",
            enrollment: "LP/1245/22",
            plan: "12 months",
            amount: "2000",
            paid: "2023-12-06",
            membership: "Pending",
        },
        {
            id: 3,
            name: "Sanju",
            enrollment: "LP/1245/22",
            plan: "12 months",
            amount: "2000",
            paid: "2023-12-06",
            membership: "Pending",
        },
    ];
    const expired_data = [
        {
            id: 1,
            name: "Manoj",
            enrollment: "LP/1245/22",
            plan: "2 months",
            amount: "4000",
            paid: "2023-12-06",
            membership: "Expired",
        },
        {
            id: 2,
            name: "Binoy",
            enrollment: "LP/1245/22",
            plan: "3 months",
            amount: "6000",
            paid: "2023-12-06",
            membership: "Expired",
        },
        {
            id: 3,
            name: "Sanju",
            enrollment: "LP/1245/22",
            plan: "8 months",
            amount: "16000",
            paid: "2023-12-06",
            membership: "Expired",
        },
        {
            id: 3,
            name: "Sanju",
            enrollment: "LP/1245/22",
            plan: "8 months",
            amount: "16000",
            paid: "2023-12-06",
            membership: "Expired",
        },
    ];
    const itemsPerPage = 5;

    const [selectedTab, setSelectedTab] = useState("active-members");
    const [advocates, setAdvocates] = useState([]);
    useEffect(() => {
        if (selectedTab === "active-members") {
            setAdvocates(active_data);
        } else if (selectedTab === "pending-requests") {
            setAdvocates(pending_data);
        } else if (selectedTab === "expired-members") {
            setAdvocates(expired_data);
        }
    }, [selectedTab]);
    return (
        <>
            <DashboardContainer>
                <HeadContainer>
                    <Heading>Advocates</Heading>
                </HeadContainer>
                <BottomContainer>
                    <TableMainContainer>
                        <Top>
                            <TopRight>
                                <FilterItem
                                    onClick={() => {
                                        setSelectedTab("active-members");
                                    }}
                                    className={
                                        selectedTab === "active-members" &&
                                        "active"
                                    }
                                >
                                    Active Request
                                </FilterItem>
                                <FilterItem
                                    onClick={() => {
                                        setSelectedTab("pending-requests");
                                    }}
                                    className={
                                        selectedTab === "pending-requests" &&
                                        "active"
                                    }
                                >
                                    Pending Request
                                    <span>{pending_data.length}</span>
                                </FilterItem>
                                <FilterItem
                                    onClick={() => {
                                        setSelectedTab("expired-members");
                                    }}
                                    className={
                                        selectedTab === "expired-members" &&
                                        "active"
                                    }
                                >
                                    Membership Expired
                                    <span>{expired_data.length}</span>
                                </FilterItem>
                            </TopRight>
                        </Top>
                        <Middle>
                            <TableHead>
                                <HeadItem type="name">
                                    <HeadingLabel>Advocate Name</HeadingLabel>
                                </HeadItem>
                                <HeadItem type="enrollment">
                                    <HeadingLabel>Enrollment</HeadingLabel>
                                </HeadItem>
                                <HeadItem type="plan">
                                    <HeadingLabel>Plan Choosed</HeadingLabel>
                                </HeadItem>
                                <HeadItem type="amount">
                                    <HeadingLabel>Amount</HeadingLabel>
                                </HeadItem>
                                <HeadItem type="paid">
                                    <HeadingLabel>Paid On</HeadingLabel>
                                </HeadItem>
                                <HeadItem type="membership">
                                    <HeadingLabel>
                                        Membership Status
                                    </HeadingLabel>
                                </HeadItem>
                            </TableHead>
                            {advocates.map((lead, index) => (
                                <TableData key={index}>
                                    <TableDataItem type="name">
                                        <Avatar>
                                            <img
                                                src={
                                                    require("../../assets/images/avatar.svg")
                                                        .default
                                                }
                                                alt="check"
                                            />
                                        </Avatar>
                                        <DataLabel type="name">
                                            {lead.name}
                                        </DataLabel>
                                    </TableDataItem>
                                    <TableDataItem type="enrollment">
                                        <DataLabel>{lead.enrollment}</DataLabel>
                                    </TableDataItem>

                                    <TableDataItem type="plan">
                                        <DataLabel>{lead.plan}</DataLabel>
                                    </TableDataItem>
                                    <TableDataItem type="amount">
                                        <DataLabel>{lead.amount}</DataLabel>
                                    </TableDataItem>
                                    <TableDataItem type="paid">
                                        <DataLabel>{lead.paid}</DataLabel>
                                    </TableDataItem>
                                    <TableDataItem type="membership">
                                        <DataLabel>{lead.membership}</DataLabel>
                                    </TableDataItem>
                                </TableData>
                            ))}
                        </Middle>
                        <Bottom>
                            <BottomLeft>
                                <RowLabel>Rows per page</RowLabel>
                                <RowsCount>10</RowsCount>
                                <Arrow>
                                    <img
                                        src={
                                            require("../../assets/images/down.svg")
                                                .default
                                        }
                                        alt="down arrow"
                                    />
                                </Arrow>
                            </BottomLeft>
                            <BottomRight>
                                <PreviousButton>
                                    <LeftArrow>
                                        <img
                                            src={
                                                require("../../assets/images/arrow-left.svg")
                                                    .default
                                            }
                                            alt="left arrow"
                                        />
                                    </LeftArrow>
                                    <ButtonLabel>Previous</ButtonLabel>
                                </PreviousButton>
                                <Pages>
                                    <PageNumber>1</PageNumber>
                                    <PageNumber>2</PageNumber>
                                    <PageNumber>3</PageNumber>
                                    <PageNumber>...</PageNumber>
                                    <PageNumber>8</PageNumber>
                                    <PageNumber>9</PageNumber>
                                    <PageNumber>10</PageNumber>
                                </Pages>
                                <NextButton>
                                    <ButtonLabel>Next</ButtonLabel>
                                    <RightArrow>
                                        <img
                                            src={
                                                require("../../assets/images/arrow-right.svg")
                                                    .default
                                            }
                                            alt="left arrow"
                                        />
                                    </RightArrow>
                                </NextButton>
                            </BottomRight>
                        </Bottom>
                    </TableMainContainer>
                </BottomContainer>
            </DashboardContainer>
        </>
    );
}

export default Home;

const DashboardContainer = styled.div`
    padding: 30px;
    width: 80%;
`;
const HeadContainer = styled.div`
    border-bottom: 1px solid #eaecf0;
    margin-bottom: 24px;
`;
const Heading = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: #101828;
    margin-bottom: 24px;
`;
const BottomContainer = styled.div``;
const TableMainContainer = styled.div`
    border: 1px solid var(--gray-300, #eaecf0);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    border-radius: 12px;
    overflow-x: scroll;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 10px;
`;

const TopRight = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #eaecf0;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;
const FilterItem = styled.div`
    padding: 10px 16px;
    border-right: 1px solid #eaecf0;
    background: var(--base-white, #fff);
    color: #344054;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 12px;
        color: #fff;
        background: #6941c6;
        /* padding: 5px; */
        width: 18px;
        height: 18px;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
    }
    &:last-child {
        border-right: unset;
    }
    &:hover {
        background: #f9fafb;
        cursor: pointer;
    }
    &.active {
        background: #f9fafb;
    }
`;
const Middle = styled.div``;
const TableHead = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid var(--gray-200, #eaecf0);
`;
const HeadItem = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    width: ${({ type }) =>
        type === "name"
            ? "15%"
            : type === "enrollment"
            ? "15%"
            : type === "plan"
            ? "11%"
            : type === "amount"
            ? "8%"
            : type === "paid"
            ? "10%"
            : type === "membership"
            ? "15%"
            : ""};
`;
const Avatar = styled.div`
    width: 25px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
`;
const HeadingLabel = styled.div`
    color: #475467;
    font-size: 12px;
`;

const TableData = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--gray-200, #eaecf0);
    overflow-x: scroll;
`;

const TableDataItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ type }) =>
        type === "function" ? "space-between" : "unset"};
    display: flex;
    width: ${({ type }) =>
        type === "name"
            ? "15%"
            : type === "enrollment"
            ? "15%"
            : type === "plan"
            ? "10%"
            : type === "amount"
            ? "8%"
            : type === "paid"
            ? "10%"
            : type === "membership"
            ? "15%"
            : ""};
    padding: 16px 24px;
`;
const DataLabel = styled.div`
    font-size: 14px;
    color: #475467;
    font-weight: 500;
    font-family: ${({ type }) =>
        type === "name" ? "gordita_medium" : "gordita_regular"};
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
`;
const PreviousButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin-right: 20px;
    background: var(--base-white, #fff);
    &:hover {
        cursor: pointer;
    }
`;
const LeftArrow = styled.div`
    width: 20px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
`;
const ButtonLabel = styled.div`
    font-size: 14px;
    color: #475467;
    font-family: "gordita_regular";
`;
const Pages = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const PageNumber = styled.span`
    width: 40px;
    height: 40px;
    color: var(--gray-600, #475467);
    text-align: center;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        border-radius: 50%;
        background: var(--gray-50, #f9fafb);
        cursor: pointer;
    }
`;
const NextButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    background: var(--base-white, #fff);
    &:hover {
        cursor: pointer;
    }
`;
const RightArrow = styled.div`
    img {
        display: block;
        width: 100%;
    }
`;

const BottomLeft = styled.div`
    display: flex;
`;
const BottomRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const RowLabel = styled.div`
    color: #344054;
    font-size: 12px;
    margin-right: 5px;
    font-weight: 500;
`;
const RowsCount = styled.div`
    color: #344054;
    font-size: 12px;
    margin-right: 5px;
    font-weight: 500;
`;
const Arrow = styled.div`
    width: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
