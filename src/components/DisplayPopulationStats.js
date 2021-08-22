import React,{useEffect, useState} from 'react'
import DisplayChart from './DisplayChart'
import {countries} from '../countries'

const DisplayPopulationStats = () => {
    const [totalData,setTotalData] = useState([])
    const [fetchYears,setFetchYears] = useState([])
    const [selectedYear, setSelectedYear] = useState('')
    
    useEffect(()=>{
        let fetchYears = [...new Set(countries.map(item => item.Year))]
        setTotalData(countries)
        setFetchYears(fetchYears) 
    },[])

    const handleSelectChange = (e) => {
        setSelectedYear(e.target.value)
    }

    return (
        <>
          <form>
            <select 
            name="selectedYear" 
            id="selectedYear"
            value={selectedYear}
            onChange={handleSelectChange}
            >
            {fetchYears && fetchYears.map((item)=>{
                return (
                    <option 
                    key={item}
                    value={item}>
                        {item}
                    </option> 
                )
            })}
            </select>
            </form>  
            <DisplayChart selectedYear={selectedYear} totalData={totalData}/>
        </>
    )
}

export default DisplayPopulationStats
