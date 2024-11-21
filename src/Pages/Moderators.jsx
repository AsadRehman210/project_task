import React from 'react'
import "../assets/styles/Card.css"
import Card from '../components/Card'
import Lelah from "../assets/images/Lelah Nichols.png"
import Jesus from "../assets/images/jesus.png";
import Annie from "../assets/images/annie.png";
import Robert from "../assets/images/Robert.png";
import Amy from "../assets/images/amy.png";


const Moderators = () => {
  const users = [
    {
      id: 1,
      name: "Lelah Nichols",
      location: "Troy, MI",
      tags: ["clothes", "stem"],
      image: Lelah,
    },
    {
      id: 2,
      name: "Jesus Weiss",
      location: "Fort Worth, TX",
      tags: ["hoodie", "gadget", "speed", "winter"],
      image: Jesus,
    },
    {
      id: 3,
      name: "Annie Rice",
      location: "Austin, TX",
      tags: ["road", "mountain", "trip", "earth", "nature"],
      image: Annie,
    },
    {
      id: 4,
      name: "Robert Brower",
      location: "Cincinnati, OH",
      tags: ["maintenance", "gears", "home", "repair"],
      image: Robert,
    },
    {
      id: 5,
      name: "Amy Campbell",
      location: "Warrior, AL",
      tags: ["music", "drinks"],
      image: Amy,
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

export default Moderators
