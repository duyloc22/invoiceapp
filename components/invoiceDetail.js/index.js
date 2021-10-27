import React from "react";
import Header from "./Header";
import Detail from "./Detail";

function index({ invoice }) {
    return (
        <div>
            <p>Go Back</p>
            <Header status={invoice.status} />
            <Detail invoice={invoice} />
        </div>
    );
}

export default index;
