"use server"
import React from 'react'

import styles from './page.module.css'
import FilterBattle from '@/components/home/filter-battle/FilterBattle'
import EventDashboard from '@/components/home/event-dashboard/EventDashboard'
import Battles from '@/components/home/Battle/Battles'
import Loading from '@/components/Loading'
import StoreProvider from '@/reduxStore/Storeprovier'
import { fetchAllBattles } from '@/api/battle/battles'

const page = async () => {

  const json = await fetchAllBattles();
  const battles = json.data;

  return (
    <div className={styles.home}>
      <EventDashboard />
      {/* <FilterBattle /> */}
      <Battles battles={battles}/>
    </div>
  )
}

export default page
