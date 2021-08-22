import React from 'react'
import {Bar} from 'react-chartjs-2'

const DisplayChart = ({selectedYear, totalData}) => {
    return (
             <>
    <div className='header'>
      <h1 className='title'>Horizontal Bar Chart</h1>
    </div>
    <Bar />
  </>
    )
}

export default DisplayChart
