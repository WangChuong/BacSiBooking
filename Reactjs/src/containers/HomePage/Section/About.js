import React, { Component } from 'react';

import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {



        return (
            <div>


                <div className="section-share section-about">
                    <div className="section-about-header">
                        Thông tin cơ sở bệnh viện của chúng tôi
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/jbv_oefhoa4" title="BookingCare - Đặt lịch khám bệnh dễ dàng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="content-right">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3974255587686!2d106.70013031458909!3d10.780842392318482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49a8134407%3A0x8b3ac844e0a002a4!2zQuG7h25oIHZp4buHbiBOaGkgxJDhu5NuZyAy!5e0!3m2!1svi!2s!4v1666445190923!5m2!1svi!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>

                    </div>
                </div>



                <div className="section-share section-about1">
                    <div className="section-about-header1">
                        Nếu có mọi thắc mắc, vui lòng liên hệ chúng tôi :
                    </div>
                    <div className="section-about-content1">
                        <div className="content-left1">
                            <div className="row">
                                <div className="col-4 mb-3">
                                    <label><FormattedMessage id="manage-user.email" /> </label>
                                    <input type="email" className="form-control"

                                    />
                                </div>

                                <div className="col-4 mb-3">
                                    <label><FormattedMessage id="manage-user.first-name" /></label>
                                    <input type="text" className="form-control"

                                    />
                                </div>

                                <div className="col-4 mb-3">
                                    <label><FormattedMessage id="manage-user.last-name" /></label>
                                    <input type="text" className="form-control"

                                    />
                                </div>

                                <div className="col-4 mb-3">
                                    <label><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input type="text" className="form-control"

                                    />
                                </div>

                                <div className="col-8 mb-3">
                                    <label><FormattedMessage id="manage-user.reason" /></label>
                                    <textarea className="form-control"

                                    >
                                    </textarea>

                                </div>
                                <div className="col-8 mb-3">
                                <button class="btn btn-primary" type="submit">Gửi phản hồi</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>




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

export default connect(mapStateToProps, mapDispatchToProps)(About);
