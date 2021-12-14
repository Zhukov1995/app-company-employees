import './search.css';
import { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: ''
        }
    }

    localUpdateSearch = (e) => {
        const string = e.target.value;
        this.setState({ string })
        this.props.onSearchUpdate(string)
    }
    // const {onSearch,string} = props;
    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Найти сотрудника..."
                    className="inpt-search"
                    value={this.state.string}
                    onChange={this.localUpdateSearch}
                />
            </div>
        )
    }
}

export default Search;