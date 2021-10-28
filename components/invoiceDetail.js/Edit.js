import React from "react";
import styled from "styled-components";

function Edit() {
    return (
        <Container>
            <Button>Edit</Button>
            <DeleteBtn>Delete</DeleteBtn>
            <MarkBtn>Mark as Paid</MarkBtn>
        </Container>
    );
}

export default Edit;

export const Container = styled.div`
    background-color: #ffffff;
    padding: 1.5em;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const Button = styled.button`
    border-radius: 24px;
    color: #7e88c3;
    background: #f9fafe;
    border: 0;
    padding: 1em 1.5em;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    margin: 0 0.5em;
`;
export const DeleteBtn = styled(Button)`
    background-color: #ec5757;
    color: #ffffff;
`;
export const MarkBtn = styled(DeleteBtn)`
    background-color: #7c5dfa;
`;
