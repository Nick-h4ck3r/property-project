import React from 'react'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import Properties from './Properties'

export default function Home() {
  return (
    <>
        <SearchBar />
        <FilterBar />
        <Properties />
    </>
  )
}
