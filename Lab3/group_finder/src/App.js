
import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Route, Routes, NavLink } from 'react-router-dom';
import SearchForStudents from './Pages/SearchForStudents/SearchForStudents';
import SearchForGroup from './Pages/SearchForGroup/SearchForGroup';
import YourAds from './Pages/YourAds/YourAds';
import ManageGroups from './Pages/ManageGroups/ManageGroups';
import AddSingleAd from './Pages/AddSingleAd/AddSingleAd';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const { Header, Content, Footer } = Layout;


function App() {

  const [logged, setLogged] = useState(false);

  let logoutUser = () => {
    setLogged(false);
  }

  let loginUser = () => {
    setLogged(true);

  }


  return (
    <>
      <Layout className="layout">

        <Header>
          
          {/* Logo */}
          <div className='logo'><NavLink style={isActive => ({color: isActive && "white"})} to={''}>Group Finder</NavLink></div>

          {/* Menu with bookmarks */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['6']}>

            <Menu.Item  key='1'><NavLink to={''}>Szukaj studentów</NavLink></Menu.Item>
            <Menu.Item  key='2'><NavLink to={'/searchForGroup'}>Szukaj grupy</NavLink></Menu.Item>
            
            {logged? 
            // if true
            <>
              <Menu.Item  key='3'><NavLink to={'/yourAds'}>Twoje ogłoszenia</NavLink></Menu.Item>
              <Menu.Item  key='4'><NavLink to={'/manageGroups'}>Zarządzaj grupami</NavLink></Menu.Item>
              <Menu.Item style={{marginLeft: 'auto'}} key='5' onClick={logoutUser}><NavLink to={''}>Wyloguj</NavLink></Menu.Item>
            </>
            // else
            :
            <>
              <Menu.Item style={{marginLeft: 'auto'}} key='6'><NavLink to={'/login'}>Zaloguj</NavLink></Menu.Item>
              <Menu.Item style={{marginLeft: 0, marginRight: 0}}  key='7'><NavLink to={'/register'}>Zarejestruj</NavLink></Menu.Item>
            </>
            }
          </Menu>

        </Header>
        
        {/* Content */}
        <Content style={{ padding: '30px 70px 0px 70px' }}>

          {/* Changing area */}
          <div className="side-content">

              <Routes>
                {/* Paths */}
                <Route path='' element={<SearchForStudents></SearchForStudents>}/>
                <Route path='/searchForGroup' element={<SearchForGroup></SearchForGroup>}/>
                <Route path='/yourAds' element={<YourAds></YourAds>}/>
                <Route path='/manageGroups' element={<ManageGroups></ManageGroups>}/>
                <Route path='/addSingleAd' element={<AddSingleAd></AddSingleAd>}/>
                <Route path='/login' element={<Login></Login>}/>
                <Route path='/register' element={<Register></Register>}/>

              </Routes>

          </div>

        </Content>

        {/* Fotter */}
        <Footer style={{ textAlign: 'center' }}>Created by Wiktor Danielewski ©2022</Footer>

      </Layout>
    </>
  );
}

export default App;
