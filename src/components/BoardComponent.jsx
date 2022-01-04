import React from 'react'
import '../style/index.css'
import '../style/App.css'
const BoardComponent = () => {
    return (
        <div className="w-11/12">
            <div className="w-50 float-left p-24 border-r-8 border-black border-b-8 border-black">
                A
            </div>
            <div className="w-50 float-left p-24 border-r-8 border-black border-b-8 border-black">
                B
            </div>
            <div className="w-50 float-left p-24 border-b-8 border-black">
                C
            </div>

            <div className="w-50 float-left p-24 border-r-8 border-black border-b-8 border-black">
                D
            </div>
            <div className="w-50 float-left p-24 border-r-8 border-black border-b-8 border-black">
                E
            </div>
            <div className="w-50 float-left p-24 border-b-8 border-black">
                F
            </div>

            <div className="w-50 float-left p-24 border-r-8 border-black">
                G
            </div>
            <div className="w-50 float-left p-24 border-r-8 border-black">
                H
            </div>
            <div className="w-50 float-left p-24">
                I
            </div>
        </div>
    )
}

export default BoardComponent