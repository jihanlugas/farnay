import { useEffect } from 'react';
import { connect } from "react-redux";
import Router from "next/router";
import { getUserDataAuthorized } from '../redux/actions/userActions';
import { useRouter } from 'next/router';


function isBrowser() {
    return typeof window !== 'undefined';
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        hasInit: state.static.get("hasInit"),
    };
};

function Initializer({ login, hasInit, dispatch, children, notif }) {

    const router = useRouter();

    useEffect(() => {
        if (hasInit === false) {
            dispatch(getUserDataAuthorized());
        } else if (login.get("userId") === 0) {
            router.push("/sign-in");
        } else if (login.get("authMenu").size === 0) {
            dispatch(getUserDataAuthorized());
        }
    }, [login, hasInit])

    // useEffect(() => {

    // }, [])

    return children;
}

const Init = connect(mapStateToProps)(Initializer);

export function withAuth(Component) {
    const ComponentWrapper = props => {
        return (
            <Init>
                <Component {...props} />
            </Init>
        )
    }

    ComponentWrapper.getInitialProps = async (ctx) => {
        if (!isBrowser() && ctx.res) {
            if (ctx.req.headers.cookie) {
                if (!ctx.req.headers.cookie.includes("Authorization")) {
                    ctx.res.writeHead(302, { Location: "/sign-in" });
                    ctx.res.end();
                }
            } else {
                ctx.res.writeHead(302, { Location: "/sign-in" });
                ctx.res.end();
            }
        }

        const componentProps = Component.getInitialProps && (await Component.getInitialProps(ctx));

        return { ...componentProps };
    }

    return ComponentWrapper;
}