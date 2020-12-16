import Head from 'next/head';
import { Fragment } from 'react'
import Header from "../components/Header";
import MainLayout from '../components/MainLayout';


const Contact = () => {
    return (
        <MainLayout>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"bg-red-200 w-full max-w-6xl p-8"}>
                tes
            </div>
        </MainLayout>
    )
}

export default Contact;