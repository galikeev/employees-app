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
            ]
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

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo 
                employees={employees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;