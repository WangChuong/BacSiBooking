import React, { Component } from 'react';

import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
class HomeFooter extends Component {

    render() {



        return (


                <div className="home-footer">
                    <p className="content-right-text">&copy; 2022 QuangTruongDev.com. <a target="_blank" href="http://facebook.com/kinzuss">More information, please visit our website through Facebook</a></p>
                </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
