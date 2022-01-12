import React, { useState, useEffect }  from 'react'
import './Style.scss'
import axios from "../../util/axiosInstance";



function Weather() {
    const [weather, setWeather] = useState("")

    const getWeather = async() => {
        try {
            //making a get request to fetch the profile information
            const response = await axios.get("http://localhost:3001/api/users/weather");
            if(response.status === 200){
                setWeather(response.data.weatherResponse);
            }
            console.log(weather)
        } catch (error) {
            console.log(error);
        }
    }

    const weatherIcon = ()=>{
        const mainInput = weather.weather[0]
        if(mainInput.main === "Clouds"){
            return <p className='weatherIcon'>
                        <i class="bi bi-clouds"></i>
                            {weather.main.temp.toFixed()}°   
                    </p>;
        }else if(mainInput.main === "Rain"){
            return <p className='weatherIcon'>
                        <i class="bi bi-cloud-rain"></i>
                            {weather.main.temp.toFixed()}°   
                    </p>;
        }
        else if(mainInput.main === "Clear"){
            return <p className='weatherIcon'>
                        <i class="bi bi bi-sun"></i>
                            {weather.main.temp.toFixed()}°   
                    </p>;
        }else if(mainInput.main === "Clear"){
            return <h4 className='weatherIcon'>
                        <i class="bi bi bi-sun"></i>
                            {weather.main.temp.toFixed()}°
                    </h4>
        }else {
            return <h4 className='weatherIcon'>
                        <i class="bi bi-snow"></i>
                            {weather.main.temp.toFixed()}°
                    </h4>
        }
                    
         
    }

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();

    useEffect(() => {
        //fetch profile information when component renders.
        getWeather();
    }, [])


    return (
        <div>
            <div className='weatherClass text-primary fw-bolder'>
               
            {weather? <>
                    <div className='text-center'>{weatherIcon()}</div>
                    
                    <div className='d-inline-flex'>
                        <p className='weatherIcon p-3'>
                            Cologne
                        </p>
                    
                        <p className='p-3' ><i className="gg-stopwatch">{time}</i></p>
                    </div>
                    
                     
                    
                    
                </>:''}
            </div>
        </div>
    )
}

export default Weather
