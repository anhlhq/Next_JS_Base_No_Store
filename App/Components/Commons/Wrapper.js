import React from 'react'
import Head from 'next/head'

const Wrapper = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      {children}
    </>
  )
}

export default Wrapper
