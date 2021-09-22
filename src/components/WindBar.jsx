import React from 'react'

const WindBar = () => {
    return (
        <div className='humidity-bar'>
            <div className='humidity-bar__values'>
                <div>0</div>
                <div>50</div>
                <div>100</div>
            </div>
            <div className='humidity-bar__bar'>
                <div className='humidity-bar__bar-value'></div>
            </div>
            <div className='humidity-bar__unit'>%</div>
        </div>
    )
}

export default WindBar
