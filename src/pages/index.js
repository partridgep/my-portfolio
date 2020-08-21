import React from "react"

import HomePage from '../components/HomePage'
import Layout from '../components/Layout'
import WorkProject from '../components/WorkProject'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomePage />
        <WorkProject />
      </Layout>
    </div>
  )
}
