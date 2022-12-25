import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
    const { data: session } = useSession()

    let display = (
        <div>
            Not signed in <button onClick={() => signIn()}>Sign In</button>
        </div>
    )

    if (session) {
        display = (
            <div>
                'Signed in as ' + {session.user.email}{' '}
                <img src={session.user.image} alt="user image" />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
        console.log(session)
    }

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: 'whitesmoke',
                height: '100vh',
                color: 'black',
                textAlign: 'center',
                lineHeight: '100vh',
            }}
        >
            {display}
        </div>
    )
}
