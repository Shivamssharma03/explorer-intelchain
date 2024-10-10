import React from 'react'
import HarmonyMainnetStats from '../../components/HarmonyMainnetStats'
import DashboardFilter from '../../components/DashboardFilter'
import AccountStats from '../../components/AccountStats'
import GasStats from '../../components/GasStats'
import Token from '../../components/Token'
import Contracts from '../../components/Contracts'
import BlockStats from '../../components/BlockStats'
import SearchBar from '../../components/SearchBar'
import FilterButton from '../../components/FilterButton'


export default function Charts() {
  return (
    <>
    <SearchBar/>
    <HarmonyMainnetStats/>
    <DashboardFilter/>
    {/* <AccountStats/> */}
    {/* <GasStats/> */}
    {/* <Token/> */}
    {/* <Contracts/> */}
    {/* <BlockStats/> */}
    
    </>
  )
}
