import React, { useState } from "react";
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import Properties from './Properties'
import propertiesData from "../data/propertiesData.json";


export default function Home() {
  // const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
        <SearchBar />
        <FilterBar  data = {data} setData = {setData}/>
        {/* <Properties data = {data} /> */}
    </>
  )
}
