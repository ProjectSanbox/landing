import Banner from 'sections/Banner'
import ChampionSection from 'sections/ChampionSection'
import ErrorBoundary from 'components/ErrorBoundary'
import Header from 'components/Header'
import TeamMembers from 'sections/TeamMembers'
import React from 'react'
import { useGetListItemsQuery } from 'services/items.service'
import Footer from 'sections/Footer'

export default function App() {
  useGetListItemsQuery()
  return (
    <ErrorBoundary>
      <Header />
      <Banner />
      <ChampionSection />

      <TeamMembers />

      <Footer />
    </ErrorBoundary>
  )
}
