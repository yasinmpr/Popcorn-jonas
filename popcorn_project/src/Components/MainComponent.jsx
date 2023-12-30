import { useState } from "react";
import "../css/MainComponent.css";
import SearchResultComponent from "./SearchListResultComponent";

function MainComponent() {
    return (
        <div className="mainComponent">
            <SearchResultComponent />
        </div>
    );
}

export default MainComponent;
