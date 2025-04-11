import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
    return (
        <Link to="/" className="link">
            <div className="projectCard">
                <img src={item.img} alt="" />
                <div className="info">
                    <img src={item.pp} alt="" />
                    <div className="texts">
                        <h2>{item.cat}</h2>
                        <span>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ProjectCard.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        cat: PropTypes.string.isRequired,
        pp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;
