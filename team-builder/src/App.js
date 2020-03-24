import React, { useState } from 'react';
import Members from './components/Members.js';
import MemberForm from './components/MemberForm.js';
import './App.css';

function App() {
  const [membersState, setMembersState] = useState([
    {
      id: 1,
      name: "Christian Corby",
      email: "christiancorby@gmail.com",
      role: "Front End Engineer"
    }
  ]);

  const addMemberHandler = newMember => {
    // Update the state
    setMembersState([...membersState, newMember]);
  };

  return (
    <div className="Members">
          <h1>Members List</h1>
          <MemberForm addMember={addMemberHandler} />
          <Members members={membersState} />
    </div>
  );
}

export default App;