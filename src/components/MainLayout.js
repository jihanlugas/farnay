import Link from 'next/link'
import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import classnames from 'classnames';
import mainlayoutStyle from "../../styles/MainLayout.module.scss";

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>
                <div className={classnames(mainlayoutStyle.main)}>
                    {children}
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default MainLayout;