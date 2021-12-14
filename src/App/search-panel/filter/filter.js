import './filter.css';

const Filter = (props) => {

    let arrBtn = [
        { label: 'Все сотрудники', name: 'show__all' },
        { label: 'На повышение', name: 'show__bonus' },
        { label: 'З/П больше 1000$', name: 'show__more1000$' }
    ];

    const btnGroup = arrBtn.map((item, index) => {
        let active = props.filter === item.name ? true : false;
        let activeBtn = active ? ' active' : null;
        return <button
            key={index}
            type="button"
            className={`filter__btn ${activeBtn}`}
            onClick={() => props.onFilterSelect(item.name)}
        >
            {item.label}
        </button>
    })
    return (
        <div className="filter">
            {btnGroup}
        </div>
    )
}


export default Filter;