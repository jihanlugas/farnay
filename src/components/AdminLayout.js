import Link from 'next/link'
import { Fragment } from 'react'
import HeaderAdmin from './HeaderAdmin'
import Sidebar from './Sidebar'
import Footer from './Footer'
import classnames from 'classnames';
import adminlayoutStyle from "../../styles/AdminLayout.module.scss";
import Modal from './Modal'

const AdminLayout = ({ children }) => {
    return (
        <Fragment>
            <main>
                <div className={'flex min-h-screen'}>
                    <div className={'hidden lg:flex lg:w-96 bg-gray-700 h-screen'}>
                        <Sidebar />
                    </div>
                    <div className={'w-full min-h-screen'}>
                        <HeaderAdmin />
                        <div className={classnames(adminlayoutStyle.main)}>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default AdminLayout;