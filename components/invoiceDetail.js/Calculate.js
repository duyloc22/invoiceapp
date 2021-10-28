import React from "react";
import styled from "styled-components";

function Calculate({ items, total }) {
    return (
        <>
            <Container>
                {items.map((element, i) => {
                    return (
                        <Items key={i}>
                            <div>
                                <Text> {element.name}</Text>
                                <Text subText>
                                    {element.quantity} x £ {element.price}.00
                                </Text>
                            </div>
                            <Text>£ {element.total}.00</Text>
                        </Items>
                    );
                })}
            </Container>
            <ItemsContainer>
                <Items>
                    <Text>Grand Total</Text>
                    <Text total>£ {total}.00</Text>
                </Items>
            </ItemsContainer>
        </>
    );
}

export default Calculate;

export const ItemsContainer = styled.div`
    padding: 1.5em;
    background-color: #373b53;
    color: #ffffff;
    border-radius: 0 0 10px 10px;
`;
export const Container = styled(ItemsContainer)`
    background-color: #f9fafe;
    color: #0c0e16;
    border-radius: 10px 10px 0 0;
    margin-top: 3em;
`;
export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Text = styled.h3`
    font-weight: bold;
    font-size: 12px;
    margin: 0.5em 0;

    ${({ subText }) => subText && "color: #7e88c3"};
    ${({ total }) => total && "font-size:20px"};
`;
