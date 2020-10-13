import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FirstPage() {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  return (
    <div className='names'>
      <h1>enter the names</h1>
      <label>Player One</label>
      <input
        type='text'
        value={playerOne}
        onChange={(event) => setPlayerOne(event.target.value)}
      ></input>
      <label>Player Two</label>
      <input
        type='text'
        value={playerTwo}
        onChange={(event) => setPlayerTwo(event.target.value)}
      ></input>
      <br />
      <button className='btn' style={{ marginTop: '30px' }}>
        <Link
          style={{ textDecoration: 'none', color: '#5f9ea0' }}
          to={{
            pathname: '/Game',
            state: {
              one: playerOne,
              two: playerTwo,
            },
          }}
        >
          Submit
        </Link>
      </button>
    </div>
  );
}

export default FirstPage;
