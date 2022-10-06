import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper'

import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить был ли клик по ячейке или игра закончена
        if (winner || boardCopy[index]) return
        // Определить чей ход X ? 0
        boardCopy[index] = xIsNext ? 'X' : '0'
        // Обновить наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext) 
    }


    const startNewGame = () => {
        return (
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Restart game</button>
        )
    }





    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick} />
            <p className='game_info'>
            { winner ? 'Winner ' + winner : 'Сейчас ходит ' + ( xIsNext ? 'X' : '0') }
            </p>
        </div>
    )
}

export default Game
