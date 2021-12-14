import './add-new-employee.css';
import { Component } from 'react';


class AddNewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { addNewPerson } = this.props;
        const { name, salary } = this.state;

        return (
            <div className="add-new-employee">
                <h2>Добавить нового сотрудника</h2>
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="inpt-name"
                        placeholder="Имя сотрудника"
                        name='name'
                        value={name}
                        onChange={this.changeValue}
                    />
                    <input
                        type="number"
                        className="inpt-salary"
                        placeholder="Зарплата в $"
                        name='salary'
                        value={salary}
                        onChange={this.changeValue}
                    />
                    <button
                        type="submit"
                        className="btn-add-new-employee"
                        onClick={() => addNewPerson(name, salary)}
                    >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}



export default AddNewEmployee;