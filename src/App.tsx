import BackToTop from 'components/BackToTop'
import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import Banner from 'sections/Banner'
import ChampionSection from 'sections/ChampionSection'
import Footer from 'sections/Footer'
import Header from 'sections/Header'
import TeamMembers from 'sections/TeamMembers'
import { useGetListItemsQuery } from 'services/items.service'
import { useGetTokenPriceQuery } from 'services/tokenPrice.service'

export default function App() {
  useGetListItemsQuery()
  useGetTokenPriceQuery()
  return (
    <ErrorBoundary>
      <Header />
      <Banner />
      <ChampionSection />

      <TeamMembers />

      <Footer />
      <BackToTop />
    </ErrorBoundary>
  )
}
