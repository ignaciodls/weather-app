import React from 'react'
import { useApp } from '../context/appContext'
import Card from './Card'
import HighlightCard from './HighlightCard'

const Cards = () => {

    const {data, setIsCelsiusUnit} = useApp()

    return (
        <div className='cards'>

            <div className='cards__grade-units'>
                <div className='cards__grade_unit' onClick={() => setIsCelsiusUnit(true)}>°C</div>
                <div className='cards__grade_unit' onClick={() => setIsCelsiusUnit(false)}>°F</div>
            </div>

            <div className='cards__days'>

                {
                    data.slice(1).map((obj,idx) => {

                        return(
                            <Card
                            key={idx}
                            date={obj.applicable_date}
                            minTemp={obj.min_temp}
                            maxTemp={obj.max_temp}
                            img={obj.img}
                            />
                        )

                    })
                }

            </div>


            <div className='cards__today-highlights-wrapper'>
                <div className='cards__today-title'>Today’s Hightlights </div>

                <div className='cards__today-highlights'>

                    {
                        Object.entries(data[0]).slice(-4).map((arr,idx) => {

                            return (
                                <HighlightCard
                                key={idx}
                                type={arr[0]}
                                value={arr[1]}/>
                            )

                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Cards
