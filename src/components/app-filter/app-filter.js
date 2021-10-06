import './app-filter.css';

const AppFilter = (props) => {
    // return (
    //     <div className="btn-group">
    //         <button 
    //             className="btn btn-light"
    //             type='button'
    //             key="all"
    //             onClick={() => props.onFilterSelect('all')}>
    //                 Все сотрудники
    //         </button>
    //         <button 
    //             className="btn btn-outline-light"
    //             type='button'
    //             key="raising"
    //             onClick={() => props.onFilterSelect('raising')}>
    //                 На повышение
    //         </button>
    //         <button 
    //             className="btn btn-outline-light"
    //             type='button'
    //             key="more1000"
    //             onClick={() => props.onFilterSelect('more1000')}>
    //                 З/П больше 1000$
    //         </button>
    //     </div>
    // );

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'raising', label: 'На повышение'},
        {name: 'more1000', label: 'З/П больше 1000$'},
        {name: 'increase', label: 'Кто получит премию'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
};

export default AppFilter;