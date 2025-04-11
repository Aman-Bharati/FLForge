import React from "react";
import PropTypes from "prop-types";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className="slide">
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dots>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

Slide.propTypes = {
    children: PropTypes.node,
    slidesToShow: PropTypes.number.isRequired, 
    arrowsScroll: PropTypes.number.isRequired, 
};

export default Slide;
