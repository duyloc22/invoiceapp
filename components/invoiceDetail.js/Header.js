import React from "react";
import Edit from "./Edit";

function Header({ status }) {
    return (
        <div>
            <p>status: {status}</p>
            <Edit />
        </div>
    );
}

export default Header;
