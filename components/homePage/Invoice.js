import React from "react";
import styled from "styled-components";
import Link from "next/link";

function invoice({ invoice }) {
    return (
        <Container>
            <Link href={`/invoice/${invoice.id.toLowerCase()}`} passHref>
                <StyledLink>
                    <p> {invoice.id} </p>
                    <p>{invoice.paymentDue}</p>
                    <p>{invoice.total}</p>
                    <p>{invoice.clientName}</p>
                    <p>{invoice.status}</p>
                </StyledLink>
            </Link>
        </Container>
    );
}

export default invoice;

export const Container = styled.div`
    margin: 20px 0;
    cursor: pointer;
`;
export const StyledLink = styled.a``;
