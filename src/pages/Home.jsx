import React from 'react'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import Properties from './Properties'
import { useState } from 'react'

export default function Home() {
  // const [selectedType, setSelectedType] = useState("");

  return (
    <>
        <SearchBar />
        <FilterBar  />
        <Properties />
    </>
  )
}
