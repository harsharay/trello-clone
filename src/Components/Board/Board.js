import React from "react"
import Task from "../Task/Task"

import "./Board.css"


const Board = (props) => {
    return (
        <div className="board-main">
            <h1>{ props.boardName }</h1>
            <div>
                <Task tasks={props.tasks} boardName={props.boardName}/>
            </div>
        </div>
    )
}

export default Board;