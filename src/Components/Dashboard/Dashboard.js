import React from "react"
import Board from "../Board/Board";
import { data } from "../../Data/Data"


import "./Dashboard.css"


const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
                <div className="all-boards">
                    {data.boards.map((item, index) => {
                        return (
                            <div key={index}>
                                <Board boardName={item.name} tasks={item.tasks} id={item.id}/>
                            </div>
                        )
                    })}
                </div>
        </>
    )
}

export default Dashboard;