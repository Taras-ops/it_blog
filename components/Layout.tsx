import React from 'react'
import Header from './Header'

interface LayoutProps {
    children: any
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout