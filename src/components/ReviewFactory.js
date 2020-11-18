import React, { useState } from "react";
import {storageService, dbService } from "../fBase";
import ReactStars from "react-rating-stars-component";
import "./Cinema.css";
const ReviewFactory = ({userObj, theaterId}) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(3.5);
    const [attachment, setAttachment] = useState("");
    const onSubmit = async (event) =>  {
        event.preventDefault();
        if (review === "") {
            return;
        }
    const reviewObj = {
        text: review,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        theaterId: theaterId,
        nickName: userObj.displayName,
        rate: rating
    }
    await dbService.collection(`reviews-${theaterId}`).add(reviewObj);
    setReview("");
    setRating(0);
    };

    const onRevChange = (event) => {
        const {
            target: {value},
        } = event;
        setReview(value)
    }

    /* const onRatChange = (event) => {
        const {
            target: {value},
        } = event;
        setRating(value)
    } */

    const ratingChanged = (newRating) => {
        setRating(newRating)
      };


    return (
        <form onSubmit={onSubmit} className="factoryForm">
        <div className="cinema">
            <div className="cinemaCard">
              <div className="cinema-inf">
                <div className="cinema-inf-top">
                  <div className="review-inf-title"><ReactStars
                  classNames="ratingstars"
      isHalf={true}
      value={3.5}
      size={24}
      onChange={ratingChanged}
      required
      />{rating}</div>
                </div>
                <div>
                  <hr className="middle_line" />
                </div>
                <div className="cinema-inf-btm">
                  <div className="cinema-inf-overview">
                  <textarea
                  className="review-input"
          value={review}
          onChange={onRevChange}
          row={3}
          required
          placeholder="리뷰를 남겨주세요"
          maxLength={1000}
        />
                  </div>
                  <div className="review-submit">
                  <input type="submit" className="submit_button" value="입력" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </form>
    )


}

export default ReviewFactory;