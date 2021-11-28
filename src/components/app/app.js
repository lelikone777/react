import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Test from "../test/test";

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
            </div>
            <Test/>
        </div>
    )
}

export default App;