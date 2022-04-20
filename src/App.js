import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import icons from './Icons';

import './App.css';
import IconLink from './components/UI/IconLink';

const App = () => {
  const [sidebarHidden, setSidebarHidden] = useState(true);
  const [dropdownStatus, setDropdownStatus] = useState({
    dropdownFeatures: true,
    dropdownCompany: true,
  });

  const closeMenuHandler = () => setSidebarHidden(true);

  const toggleFeatures = () => {
    setDropdownStatus((prev) => ({
      ...prev,
      dropdownFeatures: !dropdownStatus.dropdownFeatures,
    }));
  };

  const toggleCompany = () => {
    setDropdownStatus((prev) => ({
      ...prev,
      dropdownCompany: !dropdownStatus.dropdownCompany,
    }));
  };

  return (
    <div className="wrapper" role="main">
      <div className={`overlay ${sidebarHidden && 'hidden'}`}>
        <div className={`sidebar ${sidebarHidden && 'hidden'}`}>
          <div className="close-menu">
            <button className="close-menu-btn" onClick={closeMenuHandler}>
              <img src={icons.closeMenu} alt="Close menu" />
            </button>
          </div>
          <ul className="v-navbar">
            <li>
              <IconLink
                icon={
                  dropdownStatus.dropdownFeatures
                    ? icons.dropdown
                    : icons.dropup
                }
                alt="features dropdown menu"
                text={'Features'}
                position="img-text"
                onClick={toggleFeatures}
              />
              <ul
                className={`v-navbar dropdown ${
                  dropdownStatus.dropdownFeatures && 'hidden'
                }`}
              >
                <li>
                  <IconLink
                    icon={icons.todo}
                    alt="Todo link"
                    text="Todo List"
                  />
                </li>
                <li>
                  {' '}
                  <IconLink
                    icon={icons.calendar}
                    alt="Calendar link"
                    text="Calendar"
                  />
                </li>
                <li>
                  {' '}
                  <IconLink
                    icon={icons.reminders}
                    alt="Reminders link"
                    text="Reminders"
                  />
                </li>
                <li>
                  {' '}
                  <IconLink
                    icon={icons.planning}
                    alt="Planning link"
                    text="Planning"
                  />
                </li>
              </ul>
            </li>
            <li>
              <IconLink
                icon={
                  dropdownStatus.dropdownCompany ? icons.dropdown : icons.dropup
                }
                alt="company dropdown menu"
                text={'Company'}
                position="img-text"
                onClick={toggleCompany}
              />
              <ul
                className={`v-navbar dropdown ${
                  dropdownStatus.dropdownCompany && 'hidden'
                }`}
              >
                <li>
                  {' '}
                  <button>History</button>
                </li>
                <li>
                  <button>Our team</button>
                </li>
                <li>
                  <button>Blog</button>
                </li>
              </ul>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Register</button>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
      <Navbar openSideBar={() => setSidebarHidden(false)} />
      <div className="intro-container">
        <div className="intro-text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </p>
          <button className="button">Learn more</button>
          <div className="clients">
            <div className="client-img-container">
              <img src={icons.audiophile} alt="Audio phile client" />
            </div>
            <div className="client-img-container">
              <img src={icons.databiz} alt="Databiz client" />
            </div>
            <div className="client-img-container">
              <img src={icons.maker} alt="Maker client" />
            </div>
            <div className="client-img-container">
              <img src={icons.meet} alt="Meet client" />
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img src={icons.imgDesktop} alt={'Hero Desktop'} />
        </div>
      </div>
    </div>
  );
};

export default App;
