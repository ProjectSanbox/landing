import BackToTop from 'components/BackToTop'
import ErrorBoundary from 'components/ErrorBoundary'
import React, { useEffect } from 'react'
import Banner from 'sections/Banner'
import ChampionSection from 'sections/ChampionSection'
import Footer from 'sections/Footer'
import Header from 'sections/Header'
import TeamMembers from 'sections/TeamMembers'
import { useGetListChampionsQuery, useGetListItemsQuery, useGetListWeaponsQuery } from 'services/items.service'
import { useGetTokenPriceQuery } from 'services/tokenPrice.service'
import AOS from 'aos'
import BackedBy from 'sections/BackedBy'
import WeaponSection from 'sections/WeaponSection'
import Roadmap from 'sections/Roadmap'
import BuildLand from 'sections/BuildLand'

export default function App() {
  useGetListItemsQuery()
  useGetListChampionsQuery()
  useGetListWeaponsQuery()
  useGetTokenPriceQuery()
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    })
  }, [])
  return (
    <ErrorBoundary>
      <Header />
      <Banner />
      <ChampionSection />
      <WeaponSection />
      <BuildLand />
      <Roadmap />
      <TeamMembers />

      <BackedBy />
      <Footer />
      <BackToTop />
    </ErrorBoundary>
  )
}
