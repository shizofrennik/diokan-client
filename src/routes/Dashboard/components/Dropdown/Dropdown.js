import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Dropdown extends React.Component {
    render() {
        return (
            <DropdownButton id="dropdown" className="diokan-btn diokan-btn-toggle" title="this month">
                <MenuItem className="dropdown-menu__item">this week</MenuItem>
                <MenuItem className="dropdown-menu__item dropdown-menu__item_active">this week</MenuItem>
                <MenuItem className="dropdown-menu__item">this week</MenuItem>
            </DropdownButton>
           
        );
    }
}

export default  Dropdown