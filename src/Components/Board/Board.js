import React, { useEffect, useState } from "react"
import Task from "../Task/Task"
import { data } from "../../Data/Data"

import "./Board.css"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Board = (props) => {

    // const [actualData, setActualData] = useState([
    //     {
    //         name: "Yet to start",
    //         id: "first",
    //         tasks: ["First","Second","Third"]
    //     },
    //     {
    //         name: "In progress",
    //         id: "second",
    //         tasks: ["First","Third"]
    //     },
    //     {
    //         name: "Finished",
    //         id: "third",
    //         tasks: ["Second"]
    //     }
    // ]) 

    const [board1] = useState({
        name: "Yet to start",
        id: "first",
        tasks: ["First","Second","Third"]
    })
    let [board1Data, setBoard1Data] = useState(board1.tasks)

    const [board2] = useState({
        name: "In progress",
        id: "second",
        tasks: ["First","Third"]
    })
    let [board2Data, setBoard2Data] = useState(board2.tasks)

    const [board3] = useState({
        name: "Finished",
        id: "third",
        tasks: ["Second"]
    })
    let [board3Data, setBoard3Data] = useState(board3.tasks)


    const handleDragEnd = (event) => {
        console.log(51, board1Data, board2Data)
        if(!event.destination){
            return
        }
        console.log(20, event, event.source.droppableId)

        if(event.source.droppableId === event.destination.droppableId){
            if(event.source.droppableId === "Box1"){
                const items = [...board1Data]   
                console.log(84, items)         
                const [reorderedItem] = items.splice(event.source.index, 1)
                items.splice(event.destination.index,0,reorderedItem)
                setBoard1Data(items)
            } else if(event.source.droppableId === "Box2"){
                const items = [...board2Data]
                const [reorderedItem] = items.splice(event.source.index, 1)
                items.splice(event.destination.index,0,reorderedItem)
                setBoard2Data(items)
            }
        } else {
            console.log("From one to another")
            let sourceIds;
            let itemToBeMoved;
            if(event.source.droppableId === "Box1"){
                sourceIds = [...board1Data]
            } else if(event.source.droppableId === "Box2") {
                sourceIds = [...board2Data]
            }

            [itemToBeMoved] = sourceIds.splice(event.source.index, 1)
            
            if(event.source.droppableId === "Box1"){
                console.log(83, sourceIds)
               setBoard1Data(sourceIds)
            } else {
                setBoard2Data(sourceIds)
            }
            console.log(sourceIds)

            let destinationIds;
            if(event.destination.droppableId === "Box1" ) {
                destinationIds = [...board1Data]
            } else if(event.destination.droppableId === "Box2") {
                destinationIds = [...board2Data]
                
            }

            destinationIds.splice(event.destination.index,0, itemToBeMoved)

            if(event.destination.droppableId === "Box1" ) {
                setBoard1Data(destinationIds)
            } else {
                setBoard2Data(destinationIds)
            }
            console.log(104, destinationIds, event.destination.droppableId)
        }
      
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="Box1">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {provided.placeholder}
                        <div className="board-main">
                            <ul className="list-main">
                                { board1Data.map((task, index) => {
                                    return (
                                        <Draggable key={index+"1"} draggableId={index+"1"} index={index}>
                                        {(provided) => {
                                            return (
                                                <li key={index} 
                                                ref={provided.innerRef} 
                                                {...provided.draggableProps} 
                                                {...provided.dragHandleProps}
                                                >
                                                    {index+1}: {task}
                                                </li>
                                                )
                                        }}
                                        </Draggable>
                                    )
                                }) }
                                {/* {board1Data.map(item => <p>{item}</p>)} */}
                            </ul>
                        </div>
                    </div>                                                
                )}
            </Droppable>

            <Droppable droppableId="Box2">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {provided.placeholder}
                        <div className="board-main">
                            <ul className="list-main">
                                { board2Data.map((task, index) => {
                                    return (
                                        <Draggable key={index+"2"} draggableId={index+"2"} index={index}>
                                        {(provided) => {
                                            return (
                                                <li key={index} 
                                                ref={provided.innerRef} 
                                                {...provided.draggableProps} 
                                                {...provided.dragHandleProps}
                                                >
                                                    {index+1}: {task}
                                                </li>
                                                )
                                        }}
                                        </Draggable>
                                    )
                                }) }
                            </ul>
                        </div>
                    </div>                                                
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board;