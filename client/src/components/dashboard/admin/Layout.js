import styles from "../../../styles/dashboard/admin/Layout.module.css"
import Head from "next/head"
import Header from "./Header";
import Sidebar from "./Sidebar";


export default function Layout({ children, title}){
    

    return (
        <>
            <Head>
                <title>H2H Admin {title? `| ${title}` : ""}</title>
                <meta name="description" content="PACTO Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>
            <main className="bg-gray-100 min-h-screen flex">
                <Sidebar />
                <div className={styles.container}>
                    <Header title={title}/>
                    <div>{children}</div>   
                </div>
            </main>
        </>
    )
}