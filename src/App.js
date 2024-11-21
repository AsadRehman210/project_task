import React from "react";
import "./assets/styles/App.css";
import UserTabs from "./components/UserTabs";
import { Navigate, Route, Routes } from "react-router-dom";
import NewUser from "./Pages/NewUser";
import Reputation from "./Pages/Reputation";
import Editors from "./Pages/Editors";
import Moderators from "./Pages/Moderators";
import Voters from "./Pages/Voters";


function App() {
  return (
    <div className="app">
      <header>
        <h1 className="main_heading">Users</h1>
        <UserTabs />
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/new_user" replace />} />
        <Route path="/reputation" element={<Reputation />} />
        <Route path="/new_user" element={<NewUser />} />
        <Route path="/voters" element={<Voters />} />
        <Route path="/editors" element={<Editors />} />
        <Route path="/moderators" element={<Moderators />} />
      </Routes>

    </div>
  );
}

export default App;
