import React from 'react'
import WindBar from './WindBar'

const HighlightCard = ({type,value}) => {

    const getUnit = () => {
        
        switch(type){
            case "Wind Status":
                return "mph"
            
            case "Humidity":
                return "%"

            case "Visibility":
                return "miles"

            case "Air Pressure":
                return "mb"

            default:
                return ''
        }

    }

    return (
        <div className='card-highlight'>

            <div className='card-highlight__title'>
                {type}
            </div>

            <div>
                <span className='card-highlight__value'>{type === 'Humidity' ? value : value + ' '}</span>
                <span className='card-highlight__unit'>{getUnit()}</span>
            </div>

            {type === "Humidity" && <WindBar/>}

        </div>
    )
}

export default HighlightCard
