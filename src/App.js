import React, { useState, useEffect, useRef } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import './App.css';

const classedNumb = {
  2: 'two',
  4: 'four',
  8: 'eight',
  16: 'sixteen',
  32: 'thirty-two',
  64: 'sixty-four',
  128: 'h-t-e',
  256: 't-f-s',
  512: 'f-o-t',
  1024: 'o-z-t-f',
  2048: 't-z-f-e'
}

function App() {
  const initPageRef = useRef();
  const [keyState, setKeyState] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [randomState, setRandomState] = useState(true);
  const [scoreState, setScoreState] = useState(0);

  const [data, setData] = useState([
    [0,0,0,0], 
    [0,0,0,0], 
    [0,0,0,0], 
    [0,0,0,2]
  ]);

  const handleNewGame = () => {
    setGameState('new')
    setScoreState(0)
    setData([
      [0,0,0,0], 
      [2,0,0,0], 
      [0,0,0,0], 
      [0,0,0,2]
    ])
  }

  useEffect(() => {
    initKeys();
    initPageRef.current.focus();
  });

  useEffect(() => {
    if(randomState) {
      let data = addRandomNumber()
      setData(data)
    }

    if(!handleCheckSteps(data)) {
      setGameState('lost');
    }
  }, [keyState]);

  const addRandomNumber = () => {
    const changeCurrentData = [...data];
    const randomParent = Math.floor(Math.random() * 4)
    const randomChild = Math.floor(Math.random() * 4)
    const twoOrFour = Math.floor(Math.random() * 6) + 1  < 4 ? 2 : 4
    if(changeCurrentData[randomParent][randomChild]) {
      return addRandomNumber()
    } else {
        changeCurrentData[randomParent][randomChild] = twoOrFour;
    }
    return changeCurrentData
  }

  const initKeys = () => {
    ArrowKeysReact.config({
      left: () => {
        handleArrows('left')
      },
      right: () => {
        handleArrows('right')
      },
      up: () => {
        handleArrows('up')
      },
      down: () => {
        handleArrows('down')
      }
    });
  }

  const handleSum = (modData, side) => {
    let newData = []
    modData.forEach(row => {
      let newRow = []
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            innerRow[colIndex+1] = 0
            newRow.push(col+col)
            setScoreState(scoreState + col + col)
          } else newRow.push(col)
        }
        return innerRow
      })
      if(side === 'right') {
        newData.push(new Array(4-newRow.length).fill(0).concat(newRow))
      } else newData.push(newRow.concat(new Array(4-newRow.length).fill(0)))
    })
    return newData
  }

  const handleOrderArray = (modData, side) => {

    let newData = []
    let noM = 0
    modData.forEach(row => {
      let newRow = []
      row.forEach(col => {
        if(col) newRow.push(col)
      })
      if(newRow.length === 4) noM++
      if(side === 'right') {
        newData.push(new Array(4-newRow.length).fill(0).concat(newRow))
      } else newData.push(newRow.concat(new Array(4-newRow.length).fill(0)))
     
    })

    const sumData = handleSum(newData, side);

    if(noM === 4) {
      setRandomState(false);
    } else setRandomState(true);

    return sumData
  }

  const handleCheckSteps = (modData) => {

    let noStep = false
    modData.forEach(row => {
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            noStep = true
          } 
        } else noStep = true
      })
    })

    handleReverseArray(modData).forEach(row => {
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            noStep = true
          } 
        } else noStep = true
      })
    })
    return noStep
  }

  const handleReverseArray = (modData) => {
    let newData = []
    data.forEach((row, rowIndex) => {
      let newRow = []
      row.forEach((col, cilIndex) => {
        newRow.push(modData[cilIndex][rowIndex]);
      })
      newData.push(newRow)
    })

    return newData
  }

  const handleArrows = (eventSide) => {
    let mainData = null
    if(eventSide === 'left') {
      mainData = handleOrderArray(data, eventSide)
    }

    if(eventSide === 'right') {
      mainData = handleOrderArray(data, eventSide)
    }

    if(eventSide === 'up') {
      let newOrder = handleReverseArray(data)
      let changedOrder = handleOrderArray(newOrder, eventSide)
      mainData = handleReverseArray(changedOrder)
    }

    if(eventSide === 'down') {
      let newOrder = handleReverseArray(data)
      let changedOrder = handleOrderArray(newOrder, 'right')
      mainData = handleReverseArray(changedOrder)
    }

    if(mainData) setData(mainData)
    setKeyState(eventSide)
  }

  return (
    <div 
      className="App"
      ref={initPageRef}
      {...ArrowKeysReact.events} tabIndex="1"
    >
      <div className='big-box'>
        <div className='box-header'>
          <div 
            className='new-game-btn'
            onClick={handleNewGame}
          > new game </div>
          <div className='new-score-btn'> score: {scoreState} </div>
        </div>
        <div className='small-box'>
          {gameState === 'lost' ? <div className='pop-up-message'>
            <h1 className='message-text'> game over! </h1>
            <div 
              className='new-game-btn'
              onClick={handleNewGame}
            > try again </div>
          </div> : null}
          {
            data && data.length ? data.map((row, indexRow) => {
              let classAnm = 'swipeAnimation';
              setTimeout(() => classAnm = ' ', 0);
              let rowAnimDir = indexRow;
              if(keyState === 'up') {
                rowAnimDir = 4-indexRow
              }
              return <div
              className={`row`} > {
              row.map((col, indexCol) => {
                if(keyState === 'right') {
                  rowAnimDir = indexCol
                } else if(keyState === 'left') {
                  rowAnimDir = 4 - indexCol
                }
                return <div 
                style={{ animationDelay: `0.${rowAnimDir-1}s` }}
                key={Math.random()}
                className={`${col ? null : classAnm} box ${col ? classedNumb[col] : ''}`}> {col || null} 
              </div>
              })
            } </div>
            })
          : null
          }
        </div>
        <div className='intro-text'> please use your arrow keys to navigate </div>
      </div>
    </div>
  );
}

export default App;
