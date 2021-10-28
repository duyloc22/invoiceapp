import React from "react";
import Edit from "./Edit";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

function Header({ status }) {
    const router = useRouter();
    return (
        <HeaderContainer>
            <GoBackLink onClick={() => router.back()}> Go Back</GoBackLink>
            <Status>
                <Text>Status</Text>
                <TextStatus>&#9679; {status}</TextStatus>
                {/* <Edit /> */}
            </Status>
        </HeaderContainer>
    );
}

export default Header;

const GoBackLink = styled.p`
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    position: relative;
    padding-left: 2em;
    &:before,
    &:after {
        content: "";
        width: 7px;
        display: block;
        height: 2px;
        background: #000;
        position: absolute;
        left: 0;
    }
    &:before {
        transform: rotate(-45deg);
        top: 30%;
    }
    &:after {
        transform: rotate(45deg);
        bottom: 30%;
    }
`;
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Status = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;
    background: white;
    margin: 1em 0;
    border-radius: 10px;
    align-items: center;
`;
const Text = styled.p`
    font-size: 12px;
    color: #858bb2;
`;
const TextBack = styled(Text)`
    font-weight: bold;
    color: #000;
    cursor: pointer;
`;
const TextStatus = styled(Text)`
    color: #ff8f00;
    background: rgba(255, 143, 0, 0.1);
    border-radius: 6px;
    text-transform: capitalize;
    font-weight: bold;
    padding: 0.5em 1em;
`;
