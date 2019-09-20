import React from 'react';
import DropDownItemContainer from './drop_down_item_container';

class SearchDropDown extends React.Component {

    componentDidMount() {
        this.props.fetchAllLanguages();
    }

    render() {
        if(!this.props.languages) {
            return null;
        }
        const { languages } = this.props
        return (
            <div className="menu menu-style-search teach-menu menu-no-border" style={{borderRadius: "4px 4px 0px 0px"}}>
                <div className='menu-items menu-items-down' style={{overflowY: "hidden", borderRadius: "0px 0px 4px 4px", top: "260%"}}>
                    <div style={{maxHeight: "300px", overflowY: "auto"}}>
                        <div className="menu-group">
                            <h1 className="menu-group-name">POPULAR LANGUAGES</h1>
                            {languages.map(language => <DropDownItemContainer key={language.id} closeModal={this.props.closeModal} language={language.language} />)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default SearchDropDown;
