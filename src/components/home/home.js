import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/home.css';

function home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <p>BÁNH ĂN DẶM TRẺ EM</p>
                <Link to='/menu'>
                    <button className='btn'> ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default home