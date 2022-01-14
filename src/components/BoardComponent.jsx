import React from 'react'
import '../style/index.css'
import '../style/App.css'
import initial from '../assets/pawn/initial.svg'
import cross from '../assets/pawn/cross_play.svg'
import elipse from '../assets/pawn/elipse_play.svg'
const BoardComponent = (props) => {
    let turn = props.turn

    function handleClick(e){
        if(e.target.alt === "initial"){
            let index = e.target.getAttribute('data')
            e.target.src = turn === 1 ? cross : elipse
            e.target.alt= turn === 1 ? cross : elipse
            let result = checkBoardPawn(index, turn === 1 ? 'x' : 'o')
            if(result === 3){
                props.setDisPlay("block")
                props.score[0] += 1
                props.winner(['x', 'o'])
            }else if(result !== 0){
                props.setDisPlay("block")
                props.score[turn] += 1
                props.winner(turn === 1 ? ['x'] : ['o'])
            }else{
                props.event(turn === 1 ? 2 : 1)
            }
        }
    }

    function checkBoardPawn(index, val){
        props.pawnOnBoard[index[0]][index[1]] = val
        let pawn = ['x', 'o']
        let board = props.pawnOnBoard
        for(let i = 0; i < 2; i++){
            if(board[0][0] === pawn[i] && board[0][1] === pawn[i] && board[0][2] === pawn[i]){
                return props.turn
            }else if(board[0][0] === pawn[i] && board[0][1] === pawn[i] && board[0][2] === pawn[i]){
                return props.turn
            }else if(board[1][0] === pawn[i] && board[1][1] === pawn[i] && board[1][2] === pawn[i]){
                return props.turn
            }else if(board[2][0] === pawn[i] && board[2][1] === pawn[i] && board[2][2] === pawn[i]){
                return props.turn
            }else if(board[0][0] === pawn[i] && board[1][0] === pawn[i] && board[2][0] === pawn[i]){
                return props.turn
            }else if(board[0][1] === pawn[i] && board[1][1] === pawn[i] && board[2][1] === pawn[i]){
                return props.turn
            }else if(board[0][2] === pawn[i] && board[1][2] === pawn[i] && board[2][2] === pawn[i]){
                return props.turn
            }else if(board[0][0] === pawn[i] && board[1][1] === pawn[i] && board[2][2] === pawn[i]){
                return props.turn
            }else if(board[0][2] === pawn[i] && board[1][1] === pawn[i] && board[2][0] === pawn[i]){
                return props.turn
            }
        }
        if(checkDraw()){
            return 3
        }else{
            return 0
        }
    }

    function checkDraw(){
        let result = true;
        for(let i = 0; i < props.pawnOnBoard.length; i++){
            for(let j = 0; j < props.pawnOnBoard[i].length; j++){
                if(props.pawnOnBoard[i][j] === null){
                    result = !result
                    break;
                }
            }
            if(result === false) break;
        }
        return result
    }
    return (
        <div style={{width: '25vw',height: '25vw'}} className="grid grid-cols-3 text-center" id="board">
            <div onClick={handleClick} className="w-50 float-left border-r-8 border-black border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="00"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left border-r-8 border-black border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="01"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="02"/>
            </div>

            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="10"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="11"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-b-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="12"/>
            </div>

            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="20"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="21"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left ">
                <img src={initial} className="w-full h-full object-contain"  alt="initial" data="22"/>
            </div>
        </div>
    )
}

export default BoardComponent