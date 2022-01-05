import React from 'react'

const XOComponent = (props) => {
    let selected = props.pawn === props.title ? "border-4 border-black" : ""
    let classStyle = "rounded-lg p-5 container-xo center " + selected
    return (
        <div onClick={() => props.event(props.title)} className={classStyle}>
            <img src={props.image} width="48px" alt={props.title} style={{ marginLeft: "20%" }}/>
        </div>
    )
}

export default XOComponent