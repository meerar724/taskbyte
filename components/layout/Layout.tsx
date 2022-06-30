import React, { ReactNode } from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
//import styles from "../../styles/Layout.module.css"

type Props = {
  children?: ReactNode
  title: string
}

const Layout = ({ children, title }: Props) => (
  <div style={{ textAlign: 'center', fontFamily: 'sans-serif', alignItems: 'center' }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
