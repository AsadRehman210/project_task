import React from 'react'
import "../assets/styles/Card.css"
import Card from '../components/Card'
import Annie from "../assets/images/annie.png";
import Robert from "../assets/images/Robert.png";
import Anthony from "../assets/images/Anthony.png";


const Reputation = () => {
  const users = [
    {
      id: 1,
      name: "Annie Rice",
      location: "Austin, TX",
      tags: ["road", "mountain", "trip", "earth", "nature"],
      image: Annie,
    },
    {
      id: 2,
      name: "Robert Brower",
      location: "Cincinnati, OH",
      tags: ["maintenance", "gears", "home", "repair"],
      image: Robert,
    },
    {
        id: 3,
        name: "Anthony S. Morin",
        location: "Lyndhurst, NJ",
        tags: ["vintage", "electric"],
        image: Anthony,
      },
    
  ];
  return (

    <main className="cards-container">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </main>

  )
}

export default Reputation
