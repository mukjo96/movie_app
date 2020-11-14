import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {storageService, dbService } from "../fBase";
import ReactStars from "react-rating-stars-component";
import "./Cinema.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
const ReviewFactory = ({userObj, theaterId}) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
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
    await dbService.collection("reviews").add(reviewObj);
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
                  <div className="cinema-inf-title"><ReactStars
      isHalf={true}
      onChange={ratingChanged}
      required
      >평가해주세요</ReactStars></div>
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