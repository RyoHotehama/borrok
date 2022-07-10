import type { NextPage } from 'next'
import Header from './header'
import Head from 'next/head'

const Layout: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel = "stylesheet" href = "../styles/card.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout