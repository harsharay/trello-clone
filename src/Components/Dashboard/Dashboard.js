import React from "react"
import Board from "../Board/Board";
import { data } from "../../Data/Data"


import "./Dashboard.css"


const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
                <div className="all-boards">
                    
                    {/* <Board boardName={item.name} tasks={item.tasks} id={item.id}/> */}
                    <Board />
                            
                </div>
        </>
    )
}

export default Dashboard;