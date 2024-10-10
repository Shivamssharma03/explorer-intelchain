import React from 'react'
import HomeSearchBar from './HomeSearchBar'
import Dashboard from '../../components/DataBox'
import DataBlock from './DataBlock'

export default function Home() {
  return (
    <div className={` ml-6 z-4 p-8 pb-16 flex-1 transition-all duration-300  mt-10`}>
        
        <HomeSearchBar/>
         <Dashboard/>
         <DataBlock/>
     </div> 
  )
}
