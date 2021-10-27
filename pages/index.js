import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../data.json";
import Invoice from "../components/homePage/Invoice";

export default function Home() {
    return (
        <>
            <h1>Hello</h1>
            <div>
                {data.map((invoice) => {
                    return <Invoice key={invoice.id} invoice={invoice} />;
                })}
            </div>
        </>
    );
}

// export async function getStaticProps() {
//     const res = await fetch(data);
// }
