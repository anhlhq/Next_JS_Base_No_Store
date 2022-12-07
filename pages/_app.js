import 'Styles/Base.scss'
import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import useRouteChange from 'Hooks/RouteChange'

function MyApp({ Component, pageProps }) {
  useRouteChange({
    handleStart: () => NProgress.start(),
    handleStop: () => NProgress.done(),
  })

  return <Component {...pageProps} />
}

export default MyApp
