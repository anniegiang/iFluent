import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class DropDownItem extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push(`/teachers/${this.props.language}`);
        this.props.closeModal();
        location.reload();
    }

    render() {
        return (
            <div onClick={this.handleClick} className="menu-item">
                <div>
                    {this.props.language}
                </div>
            </div>
        )
    }
};

export default withRouter(DropDownItem);
