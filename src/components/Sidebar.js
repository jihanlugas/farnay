import Link from 'next/link'
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        authMenu: state.login.get('authMenu')
    }
}

const Sidebar = ({ dispatch, authMenu }) => {
    return (
        <div className="text-gray-200  w-full">
            <div className="h-16 flex items-center w-full">
                <p className="pl-4 tracking-widest text-3xl font-light">FARNAY</p>
            </div>
            <div className="">
                {authMenu.valueSeq().map((menu, index) => {
                    return (
                        <Link href={menu.get("path")} key={index}>
                            <a>
                                <div className="px-2 py-3 hover:bg-gray-600" key={index}>
                                    {menu.get("name")}
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Sidebar);