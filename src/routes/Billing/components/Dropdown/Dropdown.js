import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Dropdown extends React.Component {
    render() {
        return (
            <DropdownButton className="diokan-btn diokan-btn-toggle" title="Download PDF">
                <MenuItem className="dropdown-menu__item dropdown-menu__item_active">Download Statement</MenuItem>
                <MenuItem className="dropdown-menu__item">Download Invoices</MenuItem>
            </DropdownButton>
        );
    }
}

export default  Dropdown