import React from 'react'
import Link from 'next/link'
import { Layout } from 'Components/Commons'
const Home = ({ title }) => {
  return (
    <Layout title={title}>
      Test
      <Link href="/about">Push</Link>
    </Layout>
  )
}

export default Home
