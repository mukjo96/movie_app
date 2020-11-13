import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {storageService, dbService } from "../fBase";
import ReactStars from "react-rating-stars-component";
import "./review.css";
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
        console.log(newRating)
        setRating(newRating)
      };


    return (
        <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
      <ReactStars
      classNames="factoryInput__rating"
      isHalf={true}
      onChange={ratingChanged}
      />
        <input
          className="factoryInput__input"
          value={review}
          onChange={onRevChange}
          type="text"
          placeholder="리뷰를 남겨주세요"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
    </form>
    )


}

export default ReviewFactory;