import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLoginContext } from "../Providers/LoginProvider";
import { NavLink } from 'react-router-dom';



export default function MenuComponent() {

    const { loggedAccount, setLoggedAccount } = useLoginContext();
    const [ buttonsVisible, setButtonVisible ] = useState(false);

    useEffect(()=>{
        if(loggedAccount !== -1) setButtonVisible(true);
        else setButtonVisible(false);
    }, [loggedAccount])

    return(
        <>
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['6']}>

            <Menu.Item  key='1'><NavLink to={''}>Szukaj studentów</NavLink></Menu.Item>
            <Menu.Item  key='2'><NavLink to={'/searchForGroup'}>Szukaj grupy</NavLink></Menu.Item>
            
            {buttonsVisible? 
            <>
                <Menu.Item  key='3'><NavLink to={'/yourAds'}>Twoje ogłoszenia</NavLink></Menu.Item>
                <Menu.Item  key='4'><NavLink to={'/manageGroups'}>Zarządzaj grupami</NavLink></Menu.Item>
                <Menu.Item style={{marginLeft: 'auto'}} key='5' onClick={setLoggedAccount(-1)}><NavLink to={''}>Wyloguj</NavLink></Menu.Item>
            </>
            :
            <>
                <Menu.Item style={{marginLeft: 'auto'}} key='6'><NavLink to={'/login'}>Zaloguj</NavLink></Menu.Item>
                <Menu.Item style={{marginLeft: 0, marginRight: 0}}  key='7'><NavLink to={'/register'}>Zarejestruj</NavLink></Menu.Item>
            </>
            }
            </Menu>
        </>
    );
};