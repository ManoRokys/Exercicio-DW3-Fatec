import { useState } from "react";

const TrafficLight = () => {

        const [Color, setColor] = useState("gray")
    return (
        <>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h3>Semáforo</h3>
            <br/>
            <div
                style={{
                    backgroundColor: Color == "red" ? Color : "gray",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                }}></div>
            <div
                style={{
                    backgroundColor: Color == "yellow" ? Color : "gray",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                }}></div>
            <div 
                style={{
                    backgroundColor: Color == "green" ? Color : "gray",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                }}></div>
                <br />
                <div>
                    <button onClick={() => setColor("red")}>Pare!</button>&nbsp;
                    <button onClick={() => setColor("yellow")}>Atenção!</button>&nbsp;
                    <button onClick={() => setColor("green")}>Siga!</button>
                </div>
        </div>
        </>
    )
};
 
export default TrafficLight;

