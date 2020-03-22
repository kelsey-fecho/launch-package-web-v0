import React, {useState} from 'react';
import {TabContent, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import './styles/App.css';
import Logo from './logo.svg'
import mParticle from '@mparticle/web-sdk'
import CustomEvents from './components/CustomEvents'
import CommerceEvents from './components/CommerceEvents'
import IdentityEvents from './components/IdentityEvents'

const App = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const tabToggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand><img src={Logo} className="logo" alt="logo"></img>Launch Package</NavbarBrand>
      </Navbar>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { tabToggle('1'); (mParticle.logPageView("Users Page",{page: window.location.toString()})) }}
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { tabToggle('2'); (mParticle.logPageView("eCommerce Events Page",{page: window.location.toString()}))}}
          >
            eCommerce Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { tabToggle('3'); (mParticle.logPageView("Custom Events Page",{page: window.location.toString()}))}}
          >
            Custom Events
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <IdentityEvents />
        <CommerceEvents />
        <CustomEvents />
      </TabContent>
    </div>
  );
}

export default App;
