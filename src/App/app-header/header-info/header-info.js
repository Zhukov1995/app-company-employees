import './header-info.css';

const HeaderInfo = ({ employees, bonus, allExpenses }) => {


    return (
        <div className="header-info">
            <h2>Общее количество сотрудников: {employees}</h2>
            <h2>Премию получат: {bonus}</h2>
            <h2>Общие расходы по зарплате: {allExpenses} $</h2>
        </div>
    )
}

export default HeaderInfo;