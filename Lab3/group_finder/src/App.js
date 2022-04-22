
import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Route, Routes, NavLink } from 'react-router-dom';
import SearchForStudents from './Pages/SearchForStudents/SearchForStudents';
import SearchForGroup from './Pages/SearchForGroup/SearchForGroup';
import YourAds from './Pages/YourAds/YourAds';
import ManageGroups from './Pages/ManageGroups/ManageGroups';
import AddSingleAd from './Pages/AddSingleAd/AddSingleAd';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <>
      <Layout className="layout">

        <Header>
          
          {/* Logo */}
          <div className='logo'>Group Finder</div>

          {/* Menu with bookmarks */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

            <Menu.Item key='1'><NavLink to={''}>Szukaj studentów</NavLink></Menu.Item>
            <Menu.Item key='2'><NavLink to={'/searchForGroup'}>Szukaj grupy</NavLink></Menu.Item>
            <Menu.Item key='3'><NavLink to={'/yourAds'}>Twoje ogłoszenia</NavLink></Menu.Item>
            <Menu.Item key='4'><NavLink to={'/manageGroups'}>Zarządzaj grupami</NavLink></Menu.Item>
            
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
