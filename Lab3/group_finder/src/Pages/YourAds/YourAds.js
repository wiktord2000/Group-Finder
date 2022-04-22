import React from 'react';
import './YourAds.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Divider } from 'antd';

function YourAds(){

    return(
        <>
            <div className='w-100 container mt-1'>
                <div className='w-100 d-flex flex-column'>
                    <Divider orientation='center'>Poszukiwanie grupy</Divider>
                    <Button className='align-self-center' type="primary"><NavLink to={"/addSingleAd"}>Dodaj ogłoszenie</NavLink></Button>
                </div>
                <div className='w-100 d-flex flex-column'>
                    <Divider orientation='center'>Poszukiwanie studentów do grupy</Divider>
                    <Button className='align-self-center' type="primary"><NavLink to={"/"}>Dodaj ogłoszenie</NavLink></Button>
                </div>

                
            </div>

        </>
    );
}

export default YourAds;