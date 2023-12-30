import { useState } from "react";
import Header from "./Components/HeaderComponent";
import MainComponent from "./Components/MainComponent";
import "./css/main.css";

function App() {
    return (
        <>
            <div className="main">
                <Header />
                <MainComponent />
            </div>
        </>
    );
}

export default App;
