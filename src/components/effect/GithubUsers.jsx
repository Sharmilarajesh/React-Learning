import React, { useState, useEffect } from "react";

import "./GithubUsers.css";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      //   console.log(response);

      const result = await response.json();
      // console.log(result)

      setUsers(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 3000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loading) {
    return (
      <div className="users">
        <h1>Github Users</h1>
        <ul>
          {users.map((user) => {
            const { id, avatar_url, login, html_url } = user;

            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <p>{login}</p>
                <a href={html_url} target="_blank" className="profile-btn">
                  Profile
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default GithubUsers;
