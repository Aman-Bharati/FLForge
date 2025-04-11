import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./Review.scss";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/images/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/images/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/images/like.png" alt="" />
        <span>Yes</span>
        <img src="/images/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
