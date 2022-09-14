import React from 'react';
import "./seatbooking.css";

function Seatbooking() {
  return (
    <div className='stboking'>
        <h1>book your seats now</h1>
        <ul className='showcase'>
            <li>
                <div className='seat'></div>
                <p>N/A</p>
            </li>

            <li>
                <div className='seat_selected'></div>
                <p>selected</p>
            </li>

            <li>
                <div className='seat_occupied'></div>
                <p>occupied</p>
            </li>
        </ul>

        <div className='container'>
            <div className='screen'></div>
            <div className='sts'>
                <div className='column'>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                </div>
                
                <div className='column'>
                    <div className='row'>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                    </div>
                    <div className='row'>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                    </div>
                    <div className='row'>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                    </div>
                    <div className='row'>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                        <div className='seat'></div>
                    </div>
                </div>
                
                <div className='column'>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Seatbooking