"use client";

import { SessionProvider } from "next-auth/react"

//Provider is a higher order component, hence all other componenets will be wrapped within it in layout.jsx
const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider