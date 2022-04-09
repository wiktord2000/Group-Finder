import React from 'react';
import './YourAds.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

function YourAds(){

    return(
        <>
            <div className='button-container'>
                <Button type="primary"><NavLink to={"/addAd"}>Dodaj ogłoszenie</NavLink></Button>
            </div>
            
        </>
    );
}

export default YourAds;