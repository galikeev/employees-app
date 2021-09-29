import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
/* import { Component } from 'react';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {years, text, position} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name}, surname - {surname}, age - {years}, position -  {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </div>
        )
    }
} */

function App() {

    const data = [
        {name: 'John S.', salary: 800, increase: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: true, id: 3}
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;