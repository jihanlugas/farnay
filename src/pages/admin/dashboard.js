import AdminLayout from "../../components/AdminLayout";
import Head from "next/head";
import {Field, Form, Formik} from 'formik';
import {connect} from "react-redux";
import TextField from "../../components/formik/TextField";
import ButtonSubmit from "../../components/formik/ButtonSubmit";
import { userSignIn } from '../../redux/actions/userActions';
import {withAuth} from "../../hoc/withAuth";

const mapStateToProps = (state) => {
    return {}
}

const Dashboard = ({dispatch}) => {
    return (
        <AdminLayout>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"flex p-4 w-full"}>
                Main
            </div>
        </AdminLayout>
    )
}

export default withAuth(connect(mapStateToProps)(Dashboard));