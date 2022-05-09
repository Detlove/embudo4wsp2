import { AppProvider } from '@context/AppContext'
import { Transition } from '@components/Transition/Transition'

import '../styles/reset.css'
import '../styles/globals.css'

export default (props) => {
  return (
    <AppProvider>
      <MyApp {...props} />
    </AppProvider>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Transition />
      <Component {...pageProps} />
    </>
  )
}
