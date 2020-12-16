import Head from 'next/head';
import {Fragment} from 'react'
import Header from "../components/Header";
import MainLayout from '../components/MainLayout';
import Link from 'next/link'



const Home = () => {
    return (
        <MainLayout>
            <Head>
                <title>Farnay</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"flex w-full justify-center"}>
                <div className={"w-full max-w-6xl p-8"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className={''}>
                            <img src={'/images/noimage.png'} alt="Logo" width={'100%'}/>
                        </div>
                        <div className={''}>
                            <img src={'/images/noimage.png'} alt="Logo" width={'100%'}/>
                        </div>
                        <div className={''}>
                            <img src={'/images/noimage.png'} alt="Logo" width={'100%'}/>
                        </div>
                        <div className={''}>
                            <img src={'/images/noimage.png'} alt="Logo" width={'100%'}/>
                        </div>
                    </div>
                    <div className={' w-full flex flex-col items-center p-8 mb-2'}>
                        <div className={' text-xl mb-2'}>
                            From Concept to Completion, let GRAPHIA assist you.
                        </div>
                        <div className={'flex'}>
                            <Link href={'/contact'}>
                                <a className={'flex py-2 px-4 border-double border-4 border-blue-300 border-double uppercase'}>
                                    Contact Us
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={' w-full p-4 md:p-8'}>
                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className={''}>
                                <div className={'uppercase text-xl mb-4 border-l-4 pl-4 border-blue-300'}>
                                    About Farnay
                                </div>
                                <div className={'text-justify'}>
                                    We strive to keep our customers happy and to do everything possible to provide you
                                    with quality services and products in a timely manner. With over 17 years of print
                                    shop experience, Graphia is here to help with all of your printing needs. If
                                    Architecture is your need, our company provides fast and efficient design services,
                                    specializing in new construction and major renovations, dedicated to improving our
                                    environment and the quality of architecture.
                                </div>
                            </div>
                            <div className={''}>
                                <div className={'uppercase text-xl mb-4 border-l-4 pl-4 border-blue-300'}>
                                    Our Service
                                </div>
                                <div className={''}>
                                    <div className="py-1 mb-1 text-blue-300">
                                        <Link href={'/architecture'}>
                                            <a>
                                                Architecture & Engineering
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="py-1 mb-1 text-blue-300">
                                        <Link href={'/printing'}>
                                            <a>
                                                Printing & Scanning
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="py-1 mb-1 text-blue-300">
                                        <Link href={'/construction'}>
                                            <a>
                                                Contruction Services
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="py-1 mb-1 text-blue-300">
                                        <Link href={'/realestate'}>
                                            <a>
                                                Real Estate Services
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Home;