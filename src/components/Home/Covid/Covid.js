import { useState,useEffect } from "react";
import axios from "axios";
import AnimatedNumber from "animated-number-react";

const Covid = () => {
    const [covid, setCovid] = useState('');

    useEffect(() => {
        fetchCovid();        
    }, [])

    const fetchCovid = async () =>{
        await axios.get('https://disease.sh/v3/covid-19/countries/Singapore',{'Content-Type': 'text/plain','accept': 'application/json'})
        .then((response) => {
            setCovid(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    

    if(!covid){
        return <h2>Loading Covid Data...</h2>
    }

    return(
        <div className="covid-container">
            <div className="left">
                <div className="container" data-aos="fade-down">
                    
                    <h2 className="title">Covid Cases {covid.country}</h2>

                    <img src={covid.countryInfo.flag} alt={covid.countryInfo.iso2}></img>

                </div>
            </div>
            <div className="right">
                <div className="container" data-aos="fade-up">
                    <h3 className="info-label">Today Case: <AnimatedNumber duration={2000} formatValue={value => `${Number(value).toFixed(0)}`} value={covid.todayCases}></AnimatedNumber> </h3>
                    <h3 className="info-label">Today Deaths: <AnimatedNumber duration={2000} formatValue={value => `${Number(value).toFixed(0)}`} value={covid.todayDeaths}></AnimatedNumber> </h3>
                    <h3 className="info-label">Today Recovred: <AnimatedNumber duration={2000} formatValue={value => `${Number(value).toFixed(0)}`} value={covid.todayRecovered}></AnimatedNumber> </h3>
                </div>          
            </div>
        </div>
    )
}


export default Covid;