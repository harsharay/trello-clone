import React, { useEffect, useState } from "react"
// import Draggable, {DraggableCore} from 'react-draggable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "./Task.css"

const Task = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        // console.log(data)
        setData(props.tasks)
    },[props.tasks])

    const handleDragEnd = (event) => {
        if(!event.destination){
            return
        }
        console.log(20, event, event.source.droppableId)
        const items = [...data]
        // console.log(22, items, [...data], event.source.index)
        const [reorderedItem] = items.splice(event.source.index, 1)
        // console.log(31, reorderedItem)
        items.splice(event.destination.index,0,reorderedItem)
        // console.log(items)
        setData(items)
    }


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={props.boardName}>
                {(provided) => (
                    <ul className="list-main" {...provided.droppableProps} ref={provided.innerRef}>
                        {provided.placeholder}
                        {data && data.map((item, index) => {
                            return (
                                <Draggable key={index+""} draggableId={index+""} index={index}>
                                    {(provided) => {
                                        return (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {index+1} : {item}
                                            </li>
                                        )
                                    }}
                                </Draggable>
                            )
                        })}
                    </ul>                                                
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Task;