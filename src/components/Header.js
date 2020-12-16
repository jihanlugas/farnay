import Link from 'next/link'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const Header = ({ login }) => {
    return (
        <header>
            <div className="flex justify-center h-16 bg-green-400 shadow text-gray-200 font-bold">
                <div className="w-full flex justify-between items-center px-4">
                    <div className="">
                        <Link href={'/'}>
                            <p className="tracking-widest text-3xl font-light">FARNAY</p>
                        </Link>
                    </div>
                    <div className="hidden sm:flex">
                        <div className="ml-4">
                            <Link href={'/sign-in'}>
                                Sing In
                            </Link>
                        </div>
                    </div>
                    <div className={"flex sm:hidden"}>
                        Icon
                    </div>
                </div>
            </div>
        </header>
    )
}

export default connect(mapStateToProps)(Header);