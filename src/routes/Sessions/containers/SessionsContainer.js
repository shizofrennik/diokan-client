import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import moment from 'moment';
import {setFilters, getSessions} from 'store/sessions';
import Spinner from 'components/Spinner';

class SessionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      filters: {order: 0, search_string: ''},
    };

    this.toggleOrder = this.toggleOrder.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterSessions = this.filterSessions.bind(this);
  }

  componentWillMount() {
    let {filters, getSessions} = this.props;
    this.setState({searchString: filters.search_string});
    getSessions();
  }

  toggleOrder() {
    return new Promise((resolve, reject) => {
      this.setState({
        filters: {...this.state.filters, order: +!this.state.filters.order}
      });
      resolve();
    });
  }

  filterSessions() {
    this.props.setFilters(this.state.filters).then(() => this.props.getSessions());
  }

  handleSearchInput(e) {
    this.setState({
      searchString: e.target.value
    })
  }
  
  handleSearch() {
    this.setSearchString(this.state.searchString).then(() => this.filterSessions())
  }

  setSearchString(search_string) {
    return new Promise((resolve, reject) => {
      this.setState({
        filters: {...this.state.filters, search_string}
      });
      resolve();
    })
  }
  
  getSessions() {
    let {sessions, fetching} = this.props;
    if(fetching) return <div className="diokan-spinner diokan-spinner_table" style={{fontSize: "30px"}}><Spinner /></div>;

    if(!this.props.sessions.length) {
      return (
        <div className="diokan-spinner diokan-spinner_table" style={{fontSize: "30px"}}>
          No results
        </div>
      )
    }

    return sessions.map(session => (
      (
        <Link to={`sessions/preview/${session.id}`} className="diokan-table__row" key={session.id}>
          <div className="diokan-table__cell">
            {moment(session.date).format('DD-MMM-YYYY')}
          </div>
          <div className="diokan-table__cell">
            {session.users.length ? session.users[0].name : ''}
          </div>
          <div className="diokan-table__cell">
            #{session.photo_start} - {session.photo_end}
          </div>
          <div className="diokan-table__cell diokan-state__approved">
            Photos sent to client
          </div>
          <div className="diokan-table__cell">
            {session.users.length ? session.users[0].email : ''}
          </div>
          <div className="diokan-table__cell">
            {session.users.length ? session.users[0].phone : ''}
          </div>
        </Link>
      )
    ))
  }

  render() {
    let {filters} = this.state;

    return (
      <div>
        <div className="diokan-header">
          <div className="diokan-header-inner">
            <div className="diokan-header__logo">
              <div className="diokan-header__logo-text">
                Sessions
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
              <button
                className="diokan-btn diokan-btn-secondary diokan-btn-secondary_role-upload diokan-helper__coming-soon">
                  <span className="diokan-icon diokan-icon__upload">
                  </span>Upload
              </button>
            </div>
          </div>
        </div>
        <div className="diokan-main-inner diokan-main-inner__sessions">
          <div className="diokan-sessions">
            <div className="diokan-sessions-intro">
              <div className="diokan-sessions-intro-group">
                <div className="diokan-search-box">
                  <input 
                    type="text" 
                    className="diokan-search-field"
                    value={this.state.searchString}
                    placeholder="Search"
                    onKeyPress={(e) => {if(e.key === 'Enter') this.handleSearch()}}
                    onChange={this.handleSearchInput}/>
                  <button
                    className="diokan-btn diokan-btn-search"
                    onClick={this.handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"/>
                  </button>
                </div>
                <Link to="/sessions/add" className="diokan-btn diokan-btn-plus">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M7.888 17.619v-7.412H.476V7.673h7.412V.275h2.534v7.398h7.397v2.534h-7.397v7.412z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="diokan-sessions__content">
              <div className="diokan-table diokan-table__sessions">
                <div className="diokan-table__header">
                  <div className="diokan-table__row">
                    <div className="diokan-table__cell">
                      Date
                      <div className="diokan-table__cell-icon">
                        <i
                          onClick={() => this.toggleOrder().then(() => this.filterSessions())}
                          className={`fa fa-chevron-${filters.order ? "up" : "down"}`} />
                      </div>
                    </div>
                    <div className="diokan-table__cell">
                      Client Name
                    </div>
                    <div className="diokan-table__cell">
                      Photo #
                    </div>
                    <div className="diokan-table__cell">
                      Status
                    </div>
                    <div className="diokan-table__cell">
                      Email
                    </div>
                    <div className="diokan-table__cell">
                      Phone
                    </div>
                  </div>
                </div>
                <div className="diokan-table__body">
                  {this.getSessions()}
                  {/*<div className="diokan-table__row">
                    <div className="diokan-table__cell">
                      19-Jun-2017
                    </div>
                    <div className="diokan-table__cell">
                      John Doe
                    </div>
                    <div className="diokan-table__cell">
                      #456 - 470
                    </div>
                    <div className="diokan-table__cell diokan-state__waiting">
                      Upload photos
                    </div>
                    <div className="diokan-table__cell">
                      john.doe@company.com
                    </div>
                    <div className="diokan-table__cell">
                      555-316-7631
                    </div>
                  </div>
                  <div className="diokan-table__row">
                    <div className="diokan-table__cell">
                      19-Jun-2017
                    </div>
                    <div className="diokan-table__cell">
                      John Doe
                    </div>
                    <div className="diokan-table__cell">
                      #456 - 470
                    </div>
                    <div className="diokan-table__cell diokan-state__approved">
                      Photos sent to client
                    </div>
                    <div className="diokan-table__cell">
                      john.doe@company.com
                    </div>
                    <div className="diokan-table__cell">
                      555-316-7631
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    sessions: state.sessions.sessions,
    filters: state.sessions.filters,
    fetching: state.sessions.fetchingSessions,
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSessions,
    setFilters
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)