import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Redirect, Route, Switch } from 'react-router-dom';
import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";
import ManageSchedule from '../containers/System/Admin/ManageSchedule';
import Header from '../containers/Header/Header';
import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Doctor.scss';
import { FormattedMessage } from 'react-intl';
import ManagePatient from '../containers/System/Admin/ManagePatient';
import adminService from '../services/adminService';

class Doctor extends Component {
   

    render() {

        const { isLoggedIn } = this.props;

        return (
            <React.Fragment>
{isLoggedIn && <Header />}
<div className="system-container">
    <div className="system-list">
        <Switch>
            <Route path="/doctor/manage-schedule" component= {ManageSchedule} />
            <Route path="/doctor/manage-patient" component= {ManagePatient} />
        </Switch>
    </div>
</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
