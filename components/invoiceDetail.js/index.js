import React from "react";
import Header from "./Header";
import Detail from "./Detail";
import styled from "styled-components";
import Edit from "./Edit";

function index({ invoice }) {
    return (
        <Section>
            <Container>
                <Header status={invoice.status} />
                <Detail invoice={invoice} />
            </Container>

            <Edit />
        </Section>
    );
}

export default index;

export const Container = styled.div`
    padding: 1em 1em 3em;
`;
export const Section = styled.div`
    background: #f8f8fb;
    margin: 0 auto;
`;
