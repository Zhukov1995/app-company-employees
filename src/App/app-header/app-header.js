import './app-header.css';
import HeaderInfo from './header-info/header-info';


const AppHeader = ({ titleCompany, employees, bonus, allExpenses }) => {


    return (
        <header>
            <h1 className="title" >Учет сотрудников компании {titleCompany}</h1>
            <HeaderInfo
                employees={employees}
                bonus={bonus}
                allExpenses={allExpenses}
            />
        </header>
    )
}

export default AppHeader;