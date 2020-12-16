import MainLayout from "../components/MainLayout";
import Head from "next/head";
import { Field, Form, Formik } from 'formik';
import { connect } from "react-redux";
import TextField from "../components/formik/TextField";
import ButtonSubmit from "../components/formik/ButtonSubmit";
import { userSignIn } from '../redux/actions/userActions';
import { useCallback, useState, useEffect } from 'react';
import Router from "next/router";
import { withoutAuth } from '../hoc/withoutAuth';

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const SignIn = ({ dispatch, login }) => {

    const initFormikValue = {
        email: 'jihanlugas2@gmail.com',
        password: '123456',
    }

    const handleSubmit = (values, actions) => {
        dispatch(userSignIn(values))
    }

    // useEffect(() => {
    //     Router.prefetch("/admin/dashboard");
    // }, []);

    useEffect(() => {
        if (login.get("userId") > 0) {
            Router.push("/admin/dashboard");
        }
    }, [login])

    return (
        <MainLayout>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"flex p-4 w-full justify-center"}>
                <div className={"flex flex-col  p-4 w-full max-w-xl mt-20 bg-white rounded-xl shadow"}>
                    <Formik
                        initialValues={initFormikValue}
                        onSubmit={handleSubmit}
                    >
                        {() => {
                            return (
                                <Form>
                                    <div className={"text-xl flex justify-center"}>
                                        Sign In
                                    </div>
                                    <TextField
                                        label={"Email"}
                                        name={"email"}
                                        type={"email"}
                                        placeholder="Email"
                                    />
                                    <div className={"mb-4"}>
                                        <div className={""}>
                                            Password
                                        </div>
                                        <Field
                                            className={'field'}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className={""}>
                                        <ButtonSubmit
                                            label={'Sign In'}
                                        />
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </MainLayout>
    )
}

// SignIn.getInitialProps = async (ctx) => {
//     return {
//         namespacesRequired: ['page.signup', 'common']
//     }
// };

export default withoutAuth(connect(mapStateToProps)(SignIn));