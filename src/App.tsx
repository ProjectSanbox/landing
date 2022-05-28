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
import Contract from 'components/Contract'
import SocialsLinks from 'components/SocialsLinks'
import { useAppSelector } from 'state/hooks'
import { selectSocials } from 'state/global/global.slice'

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
      <BackToTop />
      <Contract />
      {socials && <SocialsLinks socials={socials} />}
    </ErrorBoundary>
  )
}
