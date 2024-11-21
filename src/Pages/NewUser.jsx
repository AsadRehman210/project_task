import React, { useEffect, useState } from 'react'
import "../assets/styles/Card.css"
import Card from '../components/Card'
import axios from 'axios';

const NewUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/users'); 
        console.log('API Response:', response.data); 
        setUsers(response.data.users); 
      } catch (err) {
        console.error('Error fetching users:', err); 
        setError(err.response ? err.response.data.message : err.message);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);


  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;
  return (

    <main className="cards-container">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </main>

  )
}

export default NewUser
