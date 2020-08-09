import 'bootstrap/dist/css/bootstrap.css' // npm install bootstrap
// to show something that'll be visible on every page, include it here.
import buildClient from '../api/build-client'
import Header from '../components/header'

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return (<div>
        <Header currentUser={currentUser}/>
        <Component {...pageProps} />
    </div>)
}

AppComponent.getInitialProps = async (appContext) => {
    // console.log(Object.keys(appContext))
    const client = buildClient(appContext.ctx)
    const { data } = await client.get('/api/users/currentuser')
    let pageProps = {}
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx)
    }

    console.log(pageProps)

    return {
        pageProps,
        ...data
    };
}

export default AppComponent