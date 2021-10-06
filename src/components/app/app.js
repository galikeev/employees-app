import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John S.', salary: 800, increase: true, raising: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, raising: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: true, raising: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState((state) => {
            return {
                data: state.data.filter(item => item.id !== id) /* перебираем каждый объект в data и возвращаем массив с объектами, id которых не равняются тому, по которому кликнули */
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            raising: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({ /* возвращаем новый объект у которого будет свойство data и возвращаем новый массив. Когда будет перебор каждого item и если сопали id, то значит это текущий нужный объект */
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]} /* будем возвращать новый объект и менять переданный prop на противоположное от предидущего значения */
                }
                return item; /* возвращаем объект если условие не совпало */
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'raising':
                return items.filter(item => item.raising);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            case 'increase':
                return items.filter(item => item.increase);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter});
    }

    onChangeSalary = (name, salary) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.name === name) {
                    return {...item, salary}
                }
                return item;
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployees(data, term), filter);

        return (
            <div className='app'>
                <AppInfo 
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}/>
    
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;