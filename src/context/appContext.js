import React, { useState } from "react";
import * as w from '../assets/index'

const AppContext = React.createContext()

export function AppContextProvider(props){

    const [isSliderOpen, setIsSliderOpen] = useState(false)

    const data = [
        {
            "img": w.Shower,
            "weather_state_name": "Shower",
            "applicable_date": "Today • Fri, 5 Jun",
            "min_temp": 16.86,
            "max_temp": 29.975,
            "the_temp": 15,
            "predictability": 70,
            "wind_direction": 277,
            "Wind Status": 7,
            "Humidity": 84,
            "Visibility": 6.4,
            "Air Pressure": 998,
          },
          {
            "img": w.Sleet,
            "applicable_date": "Tomorrow",
            "min_temp": 11,
            "max_temp": 16,
          },
          {
            "img": w.Sleet,
            "applicable_date": "Sun, 7 Jun",
            "min_temp": 11,
            "max_temp": 16,
          },
          {
            "img": w.Thunderstorm,
            "applicable_date": "Mon, 8 Jun",
            "min_temp": 11,
            "max_temp": 16,
          },
          {
            "img": w.LightCloud,
            "applicable_date": "Tue, 9 Jun",
            "min_temp": 11,
            "max_temp": 16,
          },
          {
            "img": w.HeavyRain,
            "applicable_date": "Wed, 10 Jun",
            "min_temp": 11,
            "max_temp": 16,
          },
    ]
    
    const obj = {
        data,
        isSliderOpen,
        setIsSliderOpen,
    }


    return <AppContext.Provider value={obj} {...props}/>

}

export function useApp(){

    return React.useContext(AppContext)

}