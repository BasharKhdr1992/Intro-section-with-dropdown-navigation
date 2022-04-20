import React, { useState } from 'react';
import icons from '../../Icons';
import IconLink from '../UI/IconLink';
import './Navbar.css';

const Navbar = ({ openSideBar }) => {
  const [dropdowns, setDropdowns] = useState({
    features: false,
    company: false,
  });

  const toggleFeaturesDd = () => {
    setDropdowns((prev) => ({
      ...prev,
      features: !prev.features,
    }));
  };

  const toggleCompanyDd = () => {
    setDropdowns((prev) => ({
      ...prev,
      company: !prev.company,
    }));
  };

  return (
    <ul className="navbar">
      <li className="navlink">
        <button>
          <img src={icons.logo} alt="Snap" />
        </button>
      </li>
      <div className="collapse">
        <li className="navlink dropdown">
          <button onClick={toggleFeaturesDd} className="dropbtn">
            Features
            <img
              className="dd-icon"
              src={dropdowns.features ? icons.dropup : icons.dropdown}
              alt={`${
                dropdowns.features ? 'dropup' : 'dropdown'
              } arrow for features`}
            />
          </button>
          <div className={`dropdown-content ${dropdowns.features && 'active'}`}>
            <IconLink icon={icons.todo} alt="Todo link" text="Todo List" />
            <IconLink
              icon={icons.calendar}
              alt="Calendar link"
              text="Calendar"
            />
            <IconLink
              icon={icons.reminders}
              alt="Reminders link"
              text="Reminders"
            />
            <IconLink
              icon={icons.planning}
              alt="Planning link"
              text="Planning"
            />
          </div>
        </li>
        <li className="navlink dropdown">
          <button onClick={toggleCompanyDd} className="dropbtn">
            Company
            <img
              className="dd-icon"
              src={dropdowns.company ? icons.dropup : icons.dropdown}
              alt={`${
                dropdowns.company ? 'dropup' : 'dropdown'
              } arrow for features`}
            />
          </button>
          <div className={`dropdown-content ${dropdowns.company && 'active'}`}>
            <button>History</button>
            <button>Our team</button>
            <button>Blog</button>
          </div>
        </li>
        <li className="navlink">
          <button>Careers</button>
        </li>
        <li className="navlink">
          <button>About</button>
        </li>
        <li className="navlink">
          <button>Careers</button>
        </li>
      </div>
      <li className="navlink right collapse-menu">
        <button onClick={openSideBar}>
          <img src={icons.iconMenu} alt="Open the sidebar" />
        </button>
      </li>
      <div className="collapse">
        <li className="navlink right bordered">
          <button>Register</button>
        </li>
        <li className="navlink right">
          <button>Login</button>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
