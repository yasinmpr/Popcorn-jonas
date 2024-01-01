import "./SearchListResult.css";
import { MovieComponent } from "../../components";

function SearchResultComponent() {
    return (
        <div className="searchResult">
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
        </div>
    );
}

export default SearchResultComponent;
