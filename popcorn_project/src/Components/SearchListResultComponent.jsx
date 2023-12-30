import { useState } from "react";
import "../css/SearchListResult.css";

function SearchResultComponent() {
    return (
        <div className="searchResult">
            <div className="movie">
                <img src="../../contact,png" alt="film" />
                <div className="movieDetaile">
                    <p className="movieName">interestellar</p>
                    <p className="movieDate">🗓️ 2014</p>
                </div>
            </div>
            <div className="movie">
                <img src="../../contact,png" alt="film" />
                <div className="movieDetaile">
                    <p className="movieName">interestellar2</p>
                    <p className="movieDate">🗓️ 2014</p>
                </div>
            </div>
        </div>
    );
}

export default SearchResultComponent;
