import React from 'react';

class SearchDropDown extends React.Component {

    componentDidMount() {
        this.props.fetchAllLanguages();
    }

    render() {
        if(!this.props.languages) {
            return null;
        }

        return (
            <div>
                <h1>Dropppppp</h1>
            </div>
        )
    }

}

export default SearchDropDown;
