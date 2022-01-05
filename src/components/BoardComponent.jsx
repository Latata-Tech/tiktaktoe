import React from 'react'
import '../style/index.css'
import '../style/App.css'
import initial from '../assets/pawn/initial.svg'
import cross from '../assets/pawn/cross.svg'
import elipse from '../assets/pawn/elipse.svg'
const BoardComponent = (props) => {
    let turn = props.turn

    function handleClick(e){
        if(e.target.alt === "initial"){
            e.target.src = turn === 1 ? cross : elipse
            e.target.alt= turn === 1 ? cross : elipse
            props.event(turn === 1 ? 2 : 1)
        }
    }
    return (
        <div className="w-11/12">
            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left border-r-8 border-black border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>

            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-b-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>

            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left  border-r-8 border-black">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
            <div onClick={handleClick} className="w-50 float-left ">
                <img src={initial}  width="190px" alt="initial"/>
            </div>
        </div>
    )
}

export default BoardComponent