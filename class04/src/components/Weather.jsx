import React from 'react'

const Weather = () => {

    let temp = 23;

    if (temp < 15) {
        return <h1>It's cold outside!</h1>
    } else if (temp >= 15 && temp <= 25) {
        return <h1>It's nice outside</h1>
    } else {
        return <h1>It's hot out Side</h1>
    }
}

export default Weather
