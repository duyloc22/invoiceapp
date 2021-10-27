import React from "react";
import Header from "./Header";
import Detail from "./Detail";
import styled from "styled-components";

function index({ invoice }) {
    return (
        <Section>
            <Container>
                <Header status={invoice.status} />
                <Detail invoice={invoice} />
            </Container>
        </Section>
    );
}

export default index;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 730px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`;
export const Section = styled.div`
    background: #f8f8fb;
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
`;
