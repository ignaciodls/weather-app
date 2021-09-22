import React from 'react'
import { useApp } from '../context/appContext'

const Card = ({date, maxTemp, minTemp, img}) => {

    const {isCelsiusUnit, celsiusToFahrenheit} = useApp()

    return (
        <div className='card-day'>
            
            <div className='card-day__date'>{date}</div>
            
            <img className='card-day__img' src={img} alt="Wheather" />

            <div className='card-day__temperatures'>
                <div className='card-day__max'>{isCelsiusUnit ? maxTemp : celsiusToFahrenheit(maxTemp)}{isCelsiusUnit ? '°C' : '°F'}</div>
                <div className='card-day__min'>{isCelsiusUnit ? minTemp : celsiusToFahrenheit(minTemp)}{isCelsiusUnit ? '°C' : '°F'}</div>
            </div>
            
        </div>
    )
}

export default Card
