import React from 'react';
import '../assets/styles/UserTabs.css';
import { NavLink } from 'react-router-dom';
import searchIcon from "../assets/images/search icon1.png"

const UserTabs = () => {
  const tabs = [
    { id: 'reputation', label: 'Reputation', path: '/reputation' },
    { id: 'newUsers', label: 'New users', path: '/new_user' },
    { id: 'voters', label: 'Voters', path: '/voters' },
    { id: 'editors', label: 'Editors', path: '/editors' },
    { id: 'moderators', label: 'Moderators', path: '/moderators' },
  ];

  return (
    <div className="user-tabs">
      <div className="search-bar">
        <div className="search-icon">
          <img src={searchIcon} alt='search icon' />
        </div>
        <input type="text" placeholder="Search users" />
      </div>
      <div className="tab-list">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
