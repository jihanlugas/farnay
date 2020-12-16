import { useEffect } from 'react';
import Link from 'next/link'
import {connect} from "react-redux";
import { userLogout } from '../redux/actions/userActions';
import Router from "next/router";

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const HeaderAdmin = ({login, dispatch}) => {
    const handleClick = () => {
        dispatch(userLogout())
    }
    return (
        <header>
            <div className="flex justify-center h-16 bg-green-400 shadow text-gray-200 font-bold">
                <div className="w-full flex justify-between items-center px-4">
                    <div className="">
                        <Link href={'/'}>
                            <a>
                                <p className="tracking-widest text-3xl font-light">FARNAY</p>
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <div className="ml-4">
                            <Link href={'/'}>
                                <a>
                                    Profile
                                </a>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <div onClick={handleClick}>
                                Logout
                            </div>
                        </div>
                    </div>
                    <div className={"flex md:hidden"}>
                        Icon
                    </div>
                </div>
            </div>
        </header>
    )
}

export default connect(mapStateToProps)(HeaderAdmin);