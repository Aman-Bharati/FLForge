import React from "react";
import PropTypes from "prop-types";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
    return (
        <Link to="/gigs?cat=design">
            <div className="categoryCard">
                <img src={item.img} alt="" />
                <span className="desc">{item.desc}</span>
                <span className="title">{item.title}</span>
            </div>
        </Link>
    );
};

CategoryCard.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryCard;
