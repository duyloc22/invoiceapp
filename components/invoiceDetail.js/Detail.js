import React from "react";

function Detail({ invoice }) {
    return (
        <div>
            <p>id: {invoice.id}</p>
            <p>description: {invoice.description}</p>
            <div>
                Sender address
                {invoice.senderAddress.street}
                {invoice.senderAddress.city}
                {invoice.senderAddress.postCode}
                {invoice.senderAddress.country}
            </div>
            <div>
                <p>invoice date</p>
                {invoice.createdAt}
            </div>
            <div>
                <p>payment Due</p>
                {invoice.paymentDue}
            </div>
            <div>
                <p>Bill To:</p>
                {invoice.clientName}
                {invoice.clientAddress.street}
                {invoice.clientAddress.city}
                {invoice.clientAddress.postCode}
                {invoice.clientAddress.country}
            </div>
            <div>
                <p>Send To:</p>
                {invoice.clientEmail}
            </div>
            <div>
                {invoice.items.map((element, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <p> {element.name}</p>
                                <p>
                                    {element.quantity} x {element.price}
                                </p>
                            </div>
                            <p>{element.total}</p>
                        </div>
                    );
                })}
                <div>
                    <p>Grand Total</p>
                    <p>{invoice.total}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
