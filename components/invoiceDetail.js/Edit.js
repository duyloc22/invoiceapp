import React from "react";
import styled from "styled-components";

function Edit() {
    return (
        <div>
            <Button>Edit</Button>
            <DeleteBtn>Delete</DeleteBtn>
            <MarkBtn>Mark as Paid</MarkBtn>
        </div>
    );
}

export default Edit;

export const Button = styled.button`
    border-radius: 24px;
    color: #7e88c3;
    background: #f9fafe;
    border: 0;
    padding: 1em 1.5em;
    font-weight: bold;
    margin: 0 0.3em;
    font-size: 12px;
    cursor: pointer;
`;
export const DeleteBtn = styled(Button)`
    background-color: #ec5757;
    color: #ffffff;
`;
export const MarkBtn = styled(DeleteBtn)`
    background-color: #7c5dfa;
`;
