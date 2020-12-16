import AdminLayout from "../../../components/AdminLayout";
import Head from "next/head";
import { connect } from "react-redux";
import { withAuth } from "../../../hoc/withAuth";
import { useState, useEffect } from 'react';
import pagingActions from "../../../redux/actions/pagingActions";
import { List, Map, Repeat } from "immutable";
import { pagingState } from "../../../redux/reducers/defaultState";
import { pagingComposer } from "../../../components/widget/table-pagination";
import { handlePagingFilterUi, isFetchingSelector } from "../../../utils/Helper";
import { pagingUiSelect } from '../../../selector/uiSelector';
import classnames from 'classnames';
import ModalCreateUser from '../../../components/modal/ModalCreateUser';

const loadingSelect = isFetchingSelector([pagingActions.USER_LIST.type]);

const mapStateToProps = (state) => {
    const formikSearch = state.formikSearch.get(pagingActions.USER_LIST.type, {});
    return {
        users: state.pagingData.get(pagingActions.USER_LIST.type, List()),
        formikSearch,
        isFetching: loadingSelect(state.isFetching),
        userUI: pagingUiSelect(state.paging.get(pagingActions.USER_LIST.type, pagingState), formikSearch),
    }
}

const Users = ({ dispatch, users, userUI, formikSearch, isFetching }) => {

    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    const toggleClickOverlay = (userId = 0, refresh) => {
        setSelectedId(userId)
        setIsShowModal(!isShowModal)
        if (refresh) {
            dispatch(pagingActions.request(pagingActions.USER_LIST, userUI.paging.get("page"), userUI.filter, userUI.sort));
        }
    }


    useEffect(() => {
        dispatch(pagingActions.request(pagingActions.USER_LIST, userUI.paging.get("page"), userUI.filter, userUI.sort));
    }, [])

    const handlePaginationFilter = handlePagingFilterUi(userUI, (page, filter, sort) => {
        dispatch(pagingActions.request(pagingActions.USER_LIST, page, filter, sort));
    });

    const FormPage = pagingComposer(handlePaginationFilter, userUI, isFetching);

    const tableData = isFetching ? Repeat(Map(), 5) : users.valueSeq();

    return (
        <AdminLayout>
            <Head>
                <title>Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"flex flex-col p-4 w-full"}>
                <div className={"flex text-xl mb-4"}>
                    User
                </div>
                <div className={"flex flex-col"}>
                    <div className={"flex justify-end"}>
                        <div className={"bg-green-300 p-2 mb-4 rounded"} onClick={() => toggleClickOverlay()} >
                            Create
                        </div>
                    </div>
                    <FormPage.Table>
                        <thead>
                            <tr>
                                <FormPage.ThField
                                    field={"name"}>{"Name"}</FormPage.ThField>
                                <FormPage.ThField
                                    field={"email"}>{"Email"}</FormPage.ThField>
                                <FormPage.ThField
                                    field={"gender"}>{"Gender"}</FormPage.ThField>
                                <FormPage.ThField
                                    field={"roleId"}>{"Role"}</FormPage.ThField>
                                <FormPage.Th width={"50px"}>{"Action"}</FormPage.Th>
                            </tr>
                        </thead>
                        <tbody className={""}>
                            {
                                tableData.map((rowData, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                <FormPage.LabelData>{rowData.get('name')}</FormPage.LabelData>
                                            </td>
                                            <td>
                                                <FormPage.LabelData>{rowData.get('email')}</FormPage.LabelData>
                                            </td>
                                            <td>
                                                <FormPage.LabelData>{rowData.get('gender')}</FormPage.LabelData>
                                            </td>
                                            <td>
                                                <FormPage.LabelData>{rowData.get('roleId')}</FormPage.LabelData>
                                            </td>
                                            <td>
                                                {
                                                    !isFetching && (
                                                        <a className={classnames("transition ease-in-out duration-200 cursor-pointer focus:outline-none hover:bg-surface-dark flex-grow-0 flex-shrink-0 p-2 mx-2 rounded shadow inline-block ml-2")}
                                                            onClick={() => toggleClickOverlay(rowData.get('userId'))}
                                                        >
                                                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                                                                <path fill="currentColor"
                                                                    d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                                            </svg>
                                                        </a>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </FormPage.Table>
                    <FormPage.Pagination />
                    <ModalCreateUser
                        show={isShowModal}
                        onClickOverlay={toggleClickOverlay}
                        selectedId={selectedId}
                        onCloseModal={toggleClickOverlay}
                    />
                </div>
            </div>
        </AdminLayout>
    )
}

export default withAuth(connect(mapStateToProps)(Users));