import React from "react";
import data from "../../data.json";
import { InvoiceDetail } from "../../components";

function invoice({ invoice }) {
    return <InvoiceDetail invoice={invoice} />;
}

export default invoice;

export async function getStaticProps(context) {
    const { params } = context;
    const { invoice } = params;
    return {
        props: {
            invoice: data.find((e) => e.id.toLowerCase() == invoice),
        },
    };
}

export async function getStaticPaths() {
    const paths = data.map((e) => {
        return {
            params: { invoice: e.id.toLowerCase() },
        };
    });
    return { paths, fallback: false };
}
