import './employeesList.css';
import EmployeesListItem from './employeesListItem/employeesListItem';

const EmployeesList = (props) => {
    const { data, onDelete, bonusItem, favoritItem, mySort, employees } = props;
    mySort(data)
    const elements = data.map((item, index) => {
        let name = item.name;
        return <EmployeesListItem
            key={index}
            {...item}
            onDelete={() => onDelete(name, index)}
            bonusItem={() => bonusItem(item, index)}
            favoritItem={() => favoritItem(item, index)}
        />
    })

    return (
        <ul className="employees-list">
            {employees ? elements : <h2 className="alert">У вас пока нет ни одного сотрудника</h2>}
        </ul>
    )
}

export default EmployeesList;