import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <p className="title">🍿usePopcorn</p>
                <form action="" className="searchMovie">
                    <input
                        type="text"
                        className="searchBoxMovie"
                        placeholder="search movies ..."
                    />
                </form>
                <p className="resultNumber">Found 0 result</p>
            </header>
        </>
    );
}

export default Header;
