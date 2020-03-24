import React from 'react';



const Members = (props) => {
    return (
        <div className='member-list'>
            {props.members.map(members => (
                <div className='member' key={members.id}>
                    <h2>{members.name}</h2>
                    <h3>{members.email}</h3>
                    <p>{members.role}</p>
                </div>
            ))}
        </div>
    )
};

export default Members;