import React, {useState} from 'react'
import '../style/index.css'
import '../style/App.css'
import LogoComponent from "../components/LogoComponent";
import BoardComponent from "../components/BoardComponent";
import ScoreComponent from "../components/ScoreComponent";
import ModeComponent from "../components/ModeComponent";
import ModalComponent from "../components/ModalComponent";
import XOComponent from "../components/XOComponent";
import cross from '../assets/cross.svg'
import circle from '../assets/elipse.svg'

const Play = () => {
    const [mode, setMode] = useState(1)
    const [turn, setTurn] = useState(1)
    const [pawn, setPawn] = useState('x')
    const [pawnOnBoard, resetBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])
    const [display, setDisplay] = useState('none')

    return (
        <div className="container mx-auto h-full max-h-full">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1">
                    <LogoComponent />
                    <div className="mt-40">
                        <ModeComponent event={setMode} mode={mode}/>
                        <div className="grid grid-cols-2 gap-2 content-center mt-10">
                            <XOComponent image={cross} title={"x"} mode={mode} event={setPawn} pawn={pawn}/>
                            <XOComponent image={circle} title={"o"} mode={mode} event={setPawn} pawn={pawn}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-4">
                    <div className="ml-28 mt-20">
                        <div className="grid grid-cols-1">
                            <div className="p-auto ml-28 mb-20">
                                <BoardComponent event={setTurn} turn={turn} pawnOnBoard={pawnOnBoard} setDisPlay={setDisplay}/>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <ScoreComponent status={"Player 1" + "(" + pawn + ")"} score={0}/>
                                <ScoreComponent status="Draw" score={0}/>
                                <ScoreComponent status={mode === 1 ? "Computer(" + (pawn === "x" ? "o)" : "x)") : "Player 2(" + (pawn === "x" ? "o)" : "x)")} score={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalComponent display={display}/>
        </div>
    )
}

export default Play