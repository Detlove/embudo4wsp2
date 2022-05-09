import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = (props) => {
  const [transition, setTransition] = useState({
    show: false,
    func: () => {}
  })

  const withTransition = (f) => {
    setTransition({
      show: true,
      func: f
    })
  }

  const value = {
    transition,
    setTransition,
    withTransition
  }
  return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    console.log('error context')
  }
  return context
}
