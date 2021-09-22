import React from 'react'

import { useApp } from '../context/appContext'

const Main = () => {

    const {data, setIsSliderOpen} = useApp()

    return (
        <div className='main'>
        
            <div className='main__header'>

                <div className='main__header-search' onClick={() => setIsSliderOpen(true)}>Seach for places</div>

                <div className='main__header-location'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
                </div>

            </div>
            
            <img className='main__img' src={data[0].img} alt="Shower" />

            <div className='main__temperature'>
                <span className='main__temperature-value'>{data[0].the_temp}</span>
                <span className='main__temperature-unit'>°C</span>
            </div>

            <div className='main__weather'>
                {data.weather_state_name}
            </div>

            <div className='main__date'>
                {data.applicable_date}
            </div>

            <div className='main__location'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg> Helsinki
            </div>

        </div>
    )
}

export default Main
