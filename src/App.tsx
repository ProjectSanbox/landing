import Banner from 'components/Banner'
import ErrorBoundary from 'components/ErrorBoundary'
import Header from 'components/Header'
import React from 'react'

export default function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Banner />
    </ErrorBoundary>
  )
}
