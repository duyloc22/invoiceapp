import React from "react";
import styled from "styled-components";
import Calculate from "./Calculate";

function Detail({ invoice }) {
    return (
        <Container>
            <DetailHead>
                <div>
                    <Header> #{invoice.id}</Header>
                    <Text> {invoice.description}</Text>
                </div>
                <div>
                    <TextSma> {invoice.senderAddress.street}</TextSma>
                    <TextSma> {invoice.senderAddress.city}</TextSma>
                    <TextSma> {invoice.senderAddress.postCode}</TextSma>
                    <TextSma> {invoice.senderAddress.country}</TextSma>
                </div>
            </DetailHead>
            <DetailAddress>
                <SpaceBetweenDiv>
                    <DetailDate>
                        <div>
                            <Text>Invoice date</Text>
                            <HeaderMed> {invoice.createdAt}</HeaderMed>
                        </div>
                        <div>
                            <Text>Payment Due</Text>
                            <HeaderMed> {invoice.paymentDue}</HeaderMed>
                        </div>
                    </DetailDate>
                    <DetailDate>
                        <Text>Bill To</Text>

                        <HeaderMed>{invoice.clientName}</HeaderMed>
                        <TextSma> {invoice.clientAddress.street}</TextSma>
                        <TextSma> {invoice.clientAddress.city}</TextSma>
                        <TextSma> {invoice.clientAddress.postCode}</TextSma>
                        <TextSma>{invoice.clientAddress.country}</TextSma>
                    </DetailDate>
                </SpaceBetweenDiv>

                <div>
                    <Text>Send To:</Text>
                    <HeaderMed> {invoice.clientEmail} </HeaderMed>
                </div>
            </DetailAddress>
            <Calculate items={invoice.items} total={invoice.total} />
        </Container>
    );
}

export default Detail;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 1.5em;
    border-radius: 10px;
`;
export const SpaceBetweenDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const DetailHead = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 140px;
    justify-content: space-between;
`;
export const DetailAddress = styled(DetailHead)`
    min-height: 200px;
    margin-top: 2em;
`;
export const DetailDate = styled(DetailHead)`
    min-height: 130px;
    width: 50%;
`;

export const Header = styled.h3`
    font-size: 16px;
    margin: 0;
`;
export const HeaderMed = styled(Header)`
    font-size: 15px;
    margin: 0.5em 0;
`;

export const Text = styled.p`
    color: #7e88c3;
    font-size: 12px;
    margin: 0.2em 0;
`;
export const TextSma = styled(Text)`
    font-size: 11px;
`;
