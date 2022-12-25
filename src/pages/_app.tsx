import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            {Component.auth ? (
                <Auth auth={Component.auth}>
                    <Component {...pageProps} />
                </Auth>
            ) : (
                <Component {...pageProps} />
            )}
        </SessionProvider>
    )
}

function Auth({
    children,
    auth,
}: {
    children: React.ReactElement
    auth: boolean
}) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    return children
}
