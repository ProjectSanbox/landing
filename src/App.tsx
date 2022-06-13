import AOS from 'aos'
import Contract from 'components/Contract'
import ErrorBoundary from 'components/ErrorBoundary'
import SocialsLinks from 'components/SocialsLinks'
import React, { useEffect } from 'react'
import BackedBy from 'sections/BackedBy'
import Banner from 'sections/Banner'
import BuildLand from 'sections/BuildLand'
import ChampionSection from 'sections/ChampionSection'
import Footer from 'sections/Footer'
import Header from 'sections/Header'
import Roadmap from 'sections/Roadmap'
import TeamMembers from 'sections/TeamMembers'
import WeaponSection from 'sections/WeaponSection'
import { useGetListChampionsQuery, useGetListItemsQuery, useGetListWeaponsQuery } from 'services/items.service'
import { useGetTokenPriceQuery } from 'services/tokenPrice.service'
import { selectSocials } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'

export default function App() {
  const socials = useAppSelector(selectSocials)
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
      {/* <BackToTop /> */}
      <Contract />
      {socials && <SocialsLinks socials={socials} />}
    </ErrorBoundary>
  )
}
