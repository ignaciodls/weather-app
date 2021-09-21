import React from 'react'

import Shower from '../assets/Shower.png'

const Main = () => {
    return (
        <div className='main'>
        
            <div className='main__header'>
                <div className='main__header-search'>Seach for places</div>
                <div className='main__header-location'>#</div>
            </div>
            
            <img className='main__img' src={Shower} alt="Shower" />

            <div className='main__temperature'>
                <span className='main__temperature-value'>15</span>
                <span className='main__temperature-unit'>°C</span>
            </div>

            <div className='main__weather'>
                Shower
            </div>

            <div className='main__date'>
                Today • Fri, 5 Jun
            </div>

            <div className='main__location'>
                # Helsinki
            </div>

        </div>
    )
}

export default Main
