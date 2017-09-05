import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../components/Dropdown';
import CardStatistic from 'routes/Dashboard/components/CardStatistic';
import {logo} from 'styles/svg/svgs.js';

class BillingContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="diokan-header">
                    <div className="diokan-header-inner">
                        <div className="diokan-header__logo">
                            <div className="diokan-header__logo-text">
                              Billing & Payment
                            </div>
                        </div>
                        <div className="diokan-header__action-group">
                            <div className="diokan-header__action-group-inner">
                                <div className="diokan-balance-box">
                                    <div className="diokan-balance-box__title">
                                        Balance
                                    </div>
                                    <div className="diokan-balance-box__count">
                                        $641.77
                                    </div>
                                </div>
                            </div>
                            <button className="diokan-btn diokan-btn-secondary diokan-btn-secondary_role-upload diokan-helper__coming-soon">
                                <span className="diokan-icon diokan-icon__upload">
                                </span>Upload
                            </button>
                        </div>
                    </div>
                </div>
                <div className="diokan-main-inner diokan-main-inner__photographers">
                    <div className="diokan-billing">
                        <div className="diokan-billing-intro">
                            <Row>
                                <Col md={4}>
                                    <CardStatistic cardIcon="fa fa-hourglass-end" />
                                </Col>
                                <Col md={4}>
                                    <CardStatistic/>
                                </Col>
                                <Col md={4}>
                                    <CardStatistic/>
                                </Col>
                            </Row>
                        </div>
                        <div className="diolan-billing-content">
                            <form>
                                <Row>
                                    <Col md={12}>
                                        <div className="diokan-billing-header">
                                            <div className="diokan-title-secondary diokan-title-secondary__dark">Statement</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="diokan-form-group-box">
                                    <Col md={10}>
                                        <Row>
                                            <Col md={4}>
                                                <select name="" id="" className="diokan-form-control diokan-form-control-select diokan-form-control-select__light-theme">
                                                    <option value="">Jun 1, 2017 - Jun 31, 2017</option>
                                                    <option value="">Jun 2, 2017 - Jun 3, 2017</option>
                                                    <option value="">Jun 3, 2017 - Jun 4, 2917</option>
                                                </select> 
                                            </Col>
                                            <Col md={4}>
                                                <select name="" id="" className="diokan-form-control diokan-form-control-select diokan-form-control-select__light-theme">
                                                    <option value="">All Transactions</option>
                                                    <option value="">Half Transactions</option>
                                                    <option value="">Part Transactions</option>
                                                </select> 
                                            </Col>
                                            <Col md={4}>
                                                <select name="" id="" className="diokan-form-control diokan-form-control-select diokan-form-control-select__light-theme">
                                                    <option value="">All Clients</option>
                                                    <option value="">Half Clients</option>
                                                    <option value="">Part Clients</option>
                                                </select> 
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={2}>
                                        <div className="diokan-dropdown-download">
                                            <Dropdown/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}> 
                                        <div className="diokan-table diokan-table__billing">
                                            <div className="diokan-table__header">
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        Date
                                                        <div className="diokan-table__cell-icon">
                                                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Type
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Description
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        reference #
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Amount
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Balance
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Payment Status
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="diokan-table__body">
                                                <div className="diokan-table__row diokan-state__unapproved">
                                                    <div className="diokan-table__cell">
                                                    19-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee: Ref #5551290124
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        5553167631
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        ($154.91)
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $2,035.94
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Pending
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row diokan-state__unapproved">
                                                    <div className="diokan-table__cell">
                                                        19-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Invoice
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        John Doe purchase
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        5551290124
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    $1,549.08
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $2,190.85
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Pending
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        15-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee: Ref #5551290098
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    5554358521
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    ($64.18)
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    $577.59
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        15-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    Invoice
                                                    <button className="diokan-btn diokan-btn-table-download" dangerouslySetInnerHTML={{__html: logo.TabledownLoadIcon}}></button>
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Jennifer Quinn purchase
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        5551290098
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $641.77
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    $641.77
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                    11-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    Withdrawal
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                    To account # ending 7034
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        55542129532
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        ($184.49)
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $0.00
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        07-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Service Fee: Ref #5556594287
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        5556594287
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        ($5.87)
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $184.49
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        07-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Invoice
                                                        <button className="diokan-btn diokan-btn-table-download" dangerouslySetInnerHTML={{__html: logo.TabledownLoadIcon}}></button>
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Christine Roy purchase
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        5556594287
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $58.70
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $190.36
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                                <div className="diokan-table__row">
                                                    <div className="diokan-table__cell">
                                                        07-Jun-2017
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Balance
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Balance forward
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        555098790
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        $131.66
                                                    </div>
                                                    <div className="diokan-table__cell">
                                                        Processed
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </form>  
                        </div>
                    </div>
                </div>
          </div>
        )
      }
    }

export default  BillingContainer