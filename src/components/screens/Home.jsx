import React from "react";
import styled from "styled-components";

const data = [
    {
        id: 1,
        name: "Manoj",
        enrollment: "LP/1245/22",
        plan: "12 months",
        amount: "2000",
        paid: "2023-12-06",
        membership: "APPROVED",
    },
];

function Home() {
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
                                <FilterItem>Active Members</FilterItem>
                                <FilterItem>
                                    Pending Request<span>3</span>
                                </FilterItem>
                                <FilterItem>
                                    Membership Expired<span>2</span>
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
                                    <HeadingLabel>PlanChoosed</HeadingLabel>
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
                            {data.map((lead, index) => (
                                <TableData key={index}>
                                    <TableDataItem type="name">
                                        <Avatar>
                                            <img
                                                src={
                                                    require("../../assets/avatar.svg")
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
                            <PreviousButton>
                                <LeftArrow>
                                    {/* <img
										src={
											require("../../../assets/icons/leftarrow.svg")
												.default
										}
										xx
										alt="green close"
									/> */}
                                </LeftArrow>
                                <ButtonLabel>Previous</ButtonLabel>
                            </PreviousButton>
                            <Pages>
                                <PageNumber>1</PageNumber>
                                <PageNumber>2</PageNumber>
                                <PageNumber>2</PageNumber>
                                <PageNumber>...</PageNumber>
                                <PageNumber>8</PageNumber>
                                <PageNumber>9</PageNumber>
                                <PageNumber>10</PageNumber>
                            </Pages>
                            <NextButton>
                                <ButtonLabel>Next</ButtonLabel>
                                <RightArrow>
                                    {/* <img
										src={
											require("../../../assets/icons/arrow-right.svg")
												.default
										}
										alt="green close"
									/> */}
                                </RightArrow>
                            </NextButton>
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

    span {
        font-size: 12px;
        color: #fff;
        background: #6941c6;
        padding: 5px;

        border-radius: 50%;
        display: inline-block;
        margin-left: 8px;
    }
    &:last-child {
        border-right: unset;
    }
    &:hover {
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
            ? "10%"
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
    padding: 22px 24px;
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
    padding: 12px 24px 16px 24px;
`;
const PreviousButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--gray-300, #eaecf0);
    background: var(--base-white, #fff);
    padding: 8px 14px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
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
    color: var(--gray-700, #344054);
    font-family: "gordita_regular";
`;
const Pages = styled.div`
    display: flex;
    align-items: center;
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
        background: var(--gray-50, #f9fafb);
    }
`;
const NextButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--gray-300, #eaecf0);
    background: var(--base-white, #fff);
    padding: 8px 14px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;
const RightArrow = styled.div`
    img {
        display: block;
        width: 100%;
    }
`;
