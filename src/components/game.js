import React from 'react';
import { useState } from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';

function Game(props) {
  const names = props.location.state;
  const [round, setRound] = useState('x');
  const [count, setCount] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [win, setWin] = useState(true);

  /////////////

  var possibility = undefined;
  var possibility2 = undefined;
  var possibility3 = undefined;
  var possibility4 = undefined;
  var possibility5 = undefined;
  var possibility6 = undefined;
  var possibility7 = undefined;
  var possibility8 = undefined;

  ///////////////

  let click = (e) => {
    if (e.target.textContent === '' && round === 'x' && win) {
      e.target.textContent = round;
      setRound('o');
      setCount(count + 1);
    } else if (e.target.textContent === '' && round === 'o' && win) {
      e.target.textContent = round;
      setRound('x');
      setCount(count + 1);
    }
    possibility =
      $('.one').text() === $('.two').text() &&
      $('.two').text() === $('.three').text() &&
      $('.one').text() !== '' &&
      $('.two').text() !== '' &&
      $('.three').text() !== '';

    possibility2 =
      $('.four').text() === $('.five').text() &&
      $('.five').text() === $('.six').text() &&
      $('.four').text() !== '' &&
      $('.five').text() !== '' &&
      $('.six').text() !== '';

    possibility3 =
      $('.seven').text() === $('.eight').text() &&
      $('.eight').text() === $('.nine').text() &&
      $('.seven').text() !== '' &&
      $('.eight').text() !== '' &&
      $('.nine').text() !== '';

    possibility4 =
      $('.one').text() === $('.five').text() &&
      $('.five').text() === $('.nine').text() &&
      $('.one').text() !== '' &&
      $('.five').text() !== '' &&
      $('.nine').text() !== '';

    possibility5 =
      $('.three').text() === $('.five').text() &&
      $('.five').text() === $('.seven').text() &&
      $('.three').text() !== '' &&
      $('.five').text() !== '' &&
      $('.seven').text() !== '';

    possibility6 =
      $('.one').text() === $('.four').text() &&
      $('.four').text() === $('.seven').text() &&
      $('.one').text() !== '' &&
      $('.four').text() !== '' &&
      $('.seven').text() !== '';

    possibility7 =
      $('.two').text() === $('.five').text() &&
      $('.five').text() === $('.eight').text() &&
      $('.two').text() !== '' &&
      $('.five').text() !== '' &&
      $('.eight').text() !== '';

    possibility8 =
      $('.three').text() === $('.six').text() &&
      $('.six').text() === $('.nine').text() &&
      $('.three').text() !== '' &&
      $('.six').text() !== '' &&
      $('.nine').text() !== '';

    if (
      possibility ||
      possibility2 ||
      possibility3 ||
      possibility4 ||
      possibility5 ||
      possibility6 ||
      possibility7 ||
      possibility8
    ) {
      if (count % 2 !== 0 && win) {
        setWin(false);
        setTimeout(() => {
          alert(`${names.two} won`);
          setScore2(score2 + 1);
          
        }, 500);
      } else if (count % 2 === 0 && win) {
        setWin(false);
        setTimeout(() => {
          alert(`${names.one} won`);
          setScore1(score1 + 1);
          
        }, 500);
      }
    }
  };

  /////////// Replay function

  let playAgain = (e) => {
    $('.one').text('');
    $('.two').text('');
    $('.three').text('');
    $('.four').text('');
    $('.five').text('');
    $('.six').text('');
    $('.seven').text('');
    $('.eight').text('');
    $('.nine').text('');

    setRound('x');
    setCount(0);
    setWin(true);
  };

  //////////////// Reset function
  let reset = (e) => {
    $('.one').text('');
    $('.two').text('');
    $('.three').text('');
    $('.four').text('');
    $('.five').text('');
    $('.six').text('');
    $('.seven').text('');
    $('.eight').text('');
    $('.nine').text('');

    setScore1(0);
    setScore2(0);
    setCount(0);
    setRound('x');
    setWin(true);
  };
  /////////////////
  return (
    <div>
      <div className='players'>
        <table>
          <tbody>
            <tr>
              <td>
                Player One: {names.one} <br /> Score: {score1}
              </td>
              <td>
                Player Two: {names.two} <br /> Score: {score2}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='matrix'>
        <table>
          <tbody>
            <tr>
              <td className='one' onClick={click}></td>
              <td className='two' onClick={click}></td>
              <td className='three' onClick={click}></td>
            </tr>
            <tr>
              <td className='four' onClick={click}></td>
              <td className='five' onClick={click}></td>
              <td className='six' onClick={click}></td>
            </tr>
            <tr>
              <td className='seven' onClick={click}></td>
              <td className='eight' onClick={click}></td>
              <td className='nine' onClick={click}></td>
            </tr>
          </tbody>
        </table>
        <div className='buttons'>
          <button className='btn' onClick={playAgain}>
            Play Again
          </button>
          <button className='btn' onClick={reset}>
            Reset Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
