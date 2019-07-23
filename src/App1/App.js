import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.scss"

import Header from "Layout/Header/Header"
import Footer from "Layout/Footer/Footer"
import SideMenu from "Layout/SideMenu/SideMenu"

/* Page Components */
import Home from "Home/Home"
import About from "About/About"
import Capabilities from "Capabilities/Capabilities"
import Work from "Work/Work"
import Contact from "Contact/Contact"

export default function App(props) {

  const [open, toggleMenu] = useState(false);

  const menuItems = [
    {
      label: 'Home',
      route: '/home',
      component: Home
    },
    {
      label: 'Work',
      route: '/work',
      component: Work
    },
    {
      label: 'Capabilities',
      route: '/capabilities',
      component: Capabilities
    },
    {
      label: 'About',
      route: '/about',
      component: About
    }
  ]

  return (
    <div>
      <SideMenu open={open} toggleMenu={toggleMenu} menuItems={menuItems}>
        <Header toggleMenu={() => toggleMenu(!open)} />

        {menuItems.map((item, i) => (
          <Route key={i} path={item.route} component={item.component} />
        ))}

        <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
        <Route exact path="/contact" component={Contact}/>

        <Footer />
      </SideMenu>
    </div>
  );
}