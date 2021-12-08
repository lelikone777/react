import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Test from "../test/test";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';


function App() {

    const data = [
        {name: 'Alex C.', salary: 800, increase: true, id: 1},
        {name: 'Robert D', salary: 200, increase: false, id: 2},
        {name: 'Sarah J.P.', salary: 500, increase: false, id: 3},
        {name: 'dr. Cox', salary: 1500, increase: true, id: 4}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
            <Test/>

        </div>
    )
}

export default App;