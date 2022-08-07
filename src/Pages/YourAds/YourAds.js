import React, { useEffect } from 'react';
import './YourAds.css'
import { Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';

function YourAds(){

    const navigate = useNavigate();

    return(
        <>
            <div className='w-100 container mt-1'>

                <div className='w-100 d-flex flex-column'>
                    <Divider orientation='center'>Find group</Divider>
                    <Button className='align-self-center' type="primary"><NavLink to={"/addSingleAd"}>Create group ad</NavLink></Button>
                </div>
                <div className='w-100 d-flex flex-column'>
                    <Divider orientation='center'>Find students</Divider>
                    <Button className='align-self-center' type="primary"><NavLink to={"/"}>Create single ad</NavLink></Button>
                </div>
                
            </div>
        </>
    );
}

export default YourAds;