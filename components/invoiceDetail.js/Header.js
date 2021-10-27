import React from "react";
import Edit from "./Edit";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

function Header({ status }) {
    const router = useRouter();
    return (
        <div>
            <GoBackLink onClick={() => router.back()}>Go Back</GoBackLink>
            <HeaderContainer>
                <Text>
                    Status <SpanText>{status}</SpanText>
                </Text>
                <Edit />
            </HeaderContainer>
        </div>
    );
}

export default Header;

const GoBackLink = styled.p`
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 3em;
    margin: 0;
`;
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;
    background: white;
    margin-top: 1.5em;
`;
const Text = styled.p`
    font-size: 0.75rem;
    color: #858bb2;
`;
const SpanText = styled.span`
    color: #ff8f00;
    background: rgba(255, 143, 0, 0.1);
    padding: 0.55em 1.75em;
    border-radius: 6px;
    margin-left: 1em;
    text-transform: capitalize;
    font-weight: bold;
`;
