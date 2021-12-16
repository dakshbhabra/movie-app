import React from 'react'

function Movie({ user, handleLogout }) {
  const getToken = () => {
    console.log(user);
  }
    return (
      <section className="movie">
        <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <button onClick={getToken}>Token</button>
      </section>
    );
}

export default Movie;
