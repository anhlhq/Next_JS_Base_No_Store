import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Wrapper from './Wrapper'

const Layout = ({ children, title = `` }) => {
  return (
    <Wrapper title={title}>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </Wrapper>
  )
}

export default Layout
