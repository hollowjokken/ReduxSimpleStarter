import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

    	this.state = { term: '' };
  	}

	render() {
		return (
			<div className="search-bar">
				<input
					value = {this.state.name}
					onChange={ event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState( { term } );
		this.props.onSearchTempChange( term );
	}

}

export default SearchBar;
