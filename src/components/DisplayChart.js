import React from 'react'
import {Bar} from 'react-chartjs-2'

const DisplayChart = ({selectedYear, totalData}) => {
    let getLabels = [...new Set(totalData.map(item=>item['Country Name']))]
   let filterDataByYear = totalData.filter(item => item.Year === selectedYear)
    const data = {
      labels: getLabels,
      datasets: [
        {
          data: filterDataByYear.map(item => item.Value),
          label : 'Population values',
        }
      ]
  }
    const options = {
        indexAxis: 'y',
        responsive: true,
        legend : {display: true}
      }
    return (
             <>
    <div className='header'>
      <h1 className='title'>{selectedYear}</h1>
    </div>
    <Bar  data={data} options={options}/>
  </>
    )
}

export default React.memo(DisplayChart)
