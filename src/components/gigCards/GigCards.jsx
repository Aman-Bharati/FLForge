import React from "react";
import PropTypes from "prop-types";
import "./GigCards.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
      queryKey: [item.userId],
      queryFn: () =>
        newRequest.get(`/users/${item.userId}`).then((res) => {
          return res.data;
        }),
    });
  
    return (
      <Link to={`/gig/${item._id}`} className="link">
        <div className="gigCard">
          <img src={item.cover} alt="" />
          <div className="info">
            {isLoading ? (
              "loading"
            ) : error ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                {data && data.img ? (
                  <img src={data.img} alt="" />
                ) : (
                  <img src="/img/noavatar.jpg" alt="" />
                )}
                <span>{data ? data.username : "Unknown User"}</span>
              </div>
            )}
            <p>{item.desc}</p>
            <div className="star">
              <img src="./images/star.png" alt="" />
              <span>
                {!isNaN(item.totalStars / item.starNumber) &&
                  Math.round(item.totalStars / item.starNumber)}
              </span>
            </div>
          </div>
          <hr />
          <div className="detail">
            <img src="./images/heart.png" alt="" />
            <div className="price">
              <span>STARTING AT</span>
              <h2>$ {item.price}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
  };

GigCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    totalStars: PropTypes.number.isRequired,
    starNumber: PropTypes.number.isRequired,
  }).isRequired,
};

export default GigCard;
