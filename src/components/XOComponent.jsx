import React from 'react'

const XOComponent = (props) => {
    let selected = props.pawn === props.title ? "border-4 border-black" : ""
    let classStyle = "rounded-lg p-5 container-xo center " + selected

    function handleClick()
    {
        props.event(props.title)
        if(props.title === 'o') props.turn(2)
        else props.turn(1)
    }
    return (
        <div onClick={() => handleClick()} className={classStyle}>
            <img src={props.image} width="48px" alt={props.title} style={{ marginLeft: "20%" }}/>
        </div>
    )
}

export default XOComponent