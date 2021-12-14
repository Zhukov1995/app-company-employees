import './employeesListItem.css';

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, bonusItem, favoritItem, bonus, favorit } = props;
    let classFavorit = "btn__favorit";
    let classLi = "employees__item";
    if (favorit) {
        classFavorit += " active__favorit";
    }
    if (bonus) {
        classLi += " active__bonus"
    }
    if (salary > 1000) {
        classLi += " more1000$"
    }

    return (
        <li className={classLi}>
            <div className='item__info'>
                <span className='name'>Сотрудник: <strong>{name}</strong></span>
                <span className='salary'>Зарплата: <strong>{salary}$</strong></span>
            </div>
            <div className='buttons_item'>
                <button
                    type="button"
                    className="btn__bonus"
                    onClick={bonusItem}>
                    <i className="far fa-money-bill-alt"></i>
                </button>
                <button
                    type="button"
                    className="btn__delete"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <button
                    type="button"
                    className={classFavorit}
                    onClick={favoritItem}
                >
                    <i className="fas fa-star star"></i>
                </button>
            </div>
        </li>
    )
}

export default EmployeesListItem;