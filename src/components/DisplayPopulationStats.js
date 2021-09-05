import React,{Component} from 'react'
import DisplayChart from './DisplayChart'
import {countries} from '../countries'

class DisplayPopulationStats extends Component {
    state = {
        totalData: [],
        fetchYears: [],
        selectedYear: 1960        
    }

    componentDidMount() {
        let fetchYears = [...new Set(countries.map(item => item.Year))]
        this.setState({totalData: countries, fetchYears})
    }
   
    handleSelectChange = (e) => {
            window.sessionStorage.setItem('holdYear', JSON.stringify(parseInt(e.target.value)))
            this.incrementYear()
    }   

    incrementYear = () => {
       const getSelectedYear = JSON.parse(window.sessionStorage.getItem('holdYear'))
        this.incrementTimer = setInterval(() => {
            if(this.state.selectedYear !== getSelectedYear) {
                this.setState({selectedYear: this.state.selectedYear + 1})
            }
            else {
                clearInterval(this.incrementTimer)
                this.setState({selectedYear: 1960})

            }
        }, 500);
    }


    render() {
        return (
            <>
              <form>
                <select 
                name="selectedYear" 
                id="selectedYear"
                value={this.state.selectedYear}
                onChange={this.handleSelectChange}
                >
                {this.state.fetchYears && this.state.fetchYears.map((item)=>{
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
                <DisplayChart selectedYear={this.state.selectedYear} totalData={this.state.totalData}/>
            </>
        )
    } 
}


export default DisplayPopulationStats
