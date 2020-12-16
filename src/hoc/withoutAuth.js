function isBrowser() {
    return typeof window !== 'undefined';
}

export function withoutAuth(Component) {
    const ComponentWrapper = props => {
        return (
            <Component {...props} />
        )
    }

    ComponentWrapper.getInitialProps = async (ctx) => {
        if (!isBrowser() && ctx.res) {
            if (ctx.req.headers.cookie) {
                if (ctx.req.headers.cookie.includes("Authorization")) {
                    ctx.res.writeHead(302, { Location: "/admin/dashboard" });
                    ctx.res.end();
                }
            }
        }

        const componentProps = Component.getInitialProps && (await Component.getInitialProps(ctx));

        return { ...componentProps };
    }

    return ComponentWrapper;
}