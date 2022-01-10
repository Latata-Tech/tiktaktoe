import React from "react";
import initial from '../assets/pawn/initial.svg'
import '../style/index.css'
import '../style/App.css'
import cross from '../assets/pawn/cross.svg'
import elipse from '../assets/pawn/elipse.svg'

const ModalComponent = (props) => {
    function resetBoard()
    {
        let board = document.getElementById('board').children;
        for(let i = 0; i < board.length; i++){
            let imgElementBoard = board[i].children[0];
            imgElementBoard.src = initial
            imgElementBoard.alt = "initial"
        }
        props.setDisplay("none")
        props.resetBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ])
        props.pawn('x')
        props.turn(1)
    }

    function createWinner(val)
    {
        if(val.length !== 0){
            let parent = document.getElementById('container-winner')
            parent.innerHTML = ''
            for(let i = 0; i < val.length; i++){
                let img = document.createElement('img')
                img.width = 420
                img.src = val[i] === 'x' ? cross : elipse
                parent.appendChild(img)
            }
        }
    }
    return (
        
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{display: props.display}}>
            <div className="flex items-end justify-center pt-10 px-4 pb-20 text-center sm:block sm:p-0 sm:h-4/5">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white/80 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:w-8/12 sm:h-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="text-center">
                            <div className="mt-3 text-center">
                                <div id="container-winner" className={"grid grid-cols-"+props.winner.length+" gap-2 place-items-center"}>
                                    <div>{createWinner(props.winner)}</div>
                                </div>
                                <h3 className="text-9xl leading-6 font-extrabold text-gray-900 text-center " id="modal-title">
                                    {props.winner.length === 2 ? "Draw" : "Win!"}
                                </h3>
                                <div className="mt-20">
                                    <p className="text-sm text-gray-500">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 flex justify-center mx-auto ">
                        <button onClick={()=> resetBoard()} type="button" className="inline-flex w-96 rounded-md border border-transparent shadow-sm px-6 py-5 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 justify-center">
                            Restart The Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ModalComponent