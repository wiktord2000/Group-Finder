import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import './CreateAd.css'


function CreateAd(){

    const navigate = useNavigate();

    useEffect(() => {
        // Delete side-content styling
        document.getElementById("side-content").classList.remove('black-transparency-effect', 'shadow');

        // Restore styling
        return(() => {
            document.getElementById("side-content").classList.add('black-transparency-effect', 'shadow');
        })
    }, [])

    return(
        <>
            <div className='selection-panel d-flex row black-transparency-effect shadow'>

                {/* Group ad */}
                <div onClick={() => navigate("/addGroupAd")} className='panel-hover-effect group-ad d-flex justify-content-center align-items-center col'>
                    {/* Icon with text */}
                    <div className='d-flex flex-column align-items-center'>
                        <TeamOutlined className='selection-panel-icon'/>
                        <span className='icons-description'>Group</span>
                    </div>
                </div>

                {/* Single ad */}
                <div onClick={() => navigate("/addSingleAd")} className='panel-hover-effect d-flex justify-content-center align-items-center col'>
                    {/* Icon with text */}
                    <div className='d-flex flex-column align-items-center'>
                        <UserOutlined className='selection-panel-icon'/>
                        <span className='icons-description'>Single</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CreateAd;