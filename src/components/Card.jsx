import React from 'react'

const Card = ({date, maxTemp, minTemp, img}) => {
    return (
        <div className='card-day'>
            
            <div className='card-day__date'>{date}</div>
            
            <img className='card-day__img' src={img} alt="Wheather" />

            <div className='card-day__temperatures'>
                <div className='card-day__max'>{maxTemp}°C</div>
                <div className='card-day__min'>{minTemp}°C</div>
            </div>
            
        </div>
    )
}

export default Card
