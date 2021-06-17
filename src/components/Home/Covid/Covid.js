import { useState,useEffect } from "react";
import axios from "axios";
import CovidInfo from "./CovidInfo";

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
                    <CovidInfo label="Today Case" value={covid.todayCases}/>
                    <CovidInfo label="Today Deaths" value={covid.todayDeaths}/>
                    <CovidInfo label="Today Recovered" value={covid.todayRecovered}/>
                </div>          
            </div>
        </div>
    )
}

export default Covid;