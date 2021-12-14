import { Component } from 'react';
import AddNewEmployee from './add-new-employee/add-new.employee';
import AppHeader from './app-header/app-header';
import './app.css';
import EmployeesList from './employeesList/employeesList';
import Filter from './search-panel/filter/filter';
import Search from './search-panel/search/search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: 'show__all',
            string: '',
        }
    }

    mySort = (array) => {
        const newArray = array.sort((prev, next) => {
            if (prev.name < next.name) {
                return -1;
            } else {
                return 1;
            }
        })
        return newArray;
    }

    bonusItem = (item, index) => {
        this.setState(({ data }) => ({
            data: [...data.slice(0, index), { ...item, bonus: !item.bonus }, ...data.slice(index + 1)]
        }));
    }

    favoritItem = (item, index) => {
        this.setState(({ data }) => ({
            data: [...data.slice(0, index), { ...item, favorit: !item.favorit }, ...data.slice(index + 1)]
        }));
    }



    deleteItem = (name, index) => {
        let warning = window.confirm(`Вы действительно хотите удалить данные о сотруднике ${name}? \nДанные будут окончательно утеряны`)
        if (warning) {
            this.setState(({ data }) => ({
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }));

        } else {
            this.setState(this.state.data)
        }
    }

    addNewPerson = (name, salary) => {
        if (name && salary) {
            this.setState(({ data }) => (({
                data: [...data, { name, salary, bonus: false, favorit: false }]
            })));
        } else {
            this.setState(() =>  ({
                warning: true,
            }))
            console.log('Вы ничего не ввели!')
        }
    }


    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    filterItems = (items, filter) => {
        switch (filter) {
            case 'show__bonus':
                return items.filter(item => item.bonus);
            case 'show__more1000$':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onSearch = (items, string) => {
        if (string.length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return item.name.indexOf(string) > -1;
            });
        }
    }

    onSearchUpdate = (string) => {
        this.setState({ string });
    }

    render() {
        let { data, filter, string } = this.state;
        let employees = data.length;
        let bonus = data.filter(item => item.bonus).length;
        let allExpenses = data.length > 0 ? data.reduce((acc, item) => {
            return acc + +item.salary
        }, 0) : 0;

        const filtredData = this.filterItems(this.onSearch(data, string), filter);

        return (
            <div className="app">
                <AppHeader
                    titleCompany='IT-GID'
                    employees={employees}
                    bonus={bonus}
                    allExpenses={allExpenses}
                />
                <div className="search-panel">
                    <Search onSearchUpdate={this.onSearchUpdate} />
                    <Filter onFilterSelect={this.onFilterSelect} filter={filter} />
                </div>
                <EmployeesList
                    employees={employees}
                    mySort={this.mySort}
                    data={filtredData}
                    onDelete={this.deleteItem}
                    bonusItem={this.bonusItem}
                    favoritItem={this.favoritItem}
                />
                <AddNewEmployee addNewPerson={this.addNewPerson} />
            </div>
        );
    }
}

export default App;





