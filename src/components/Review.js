import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "../fBase"
import React, {useState} from "react";
import "./Cinema.css"
import moment from "moment"
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ReactStars from "react-rating-stars-component";


const Review = ({reviewObj, isOwner, theaterId }) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.text);
    const [newRate, setNewRate] = useState(reviewObj.rate)
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this review?");
        if (ok) {
            await dbService.doc(`reviews/${reviewObj.id}`).delete();
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`reviews/${reviewObj.id}`).update({
            text: newReview,
            rate: newRate,
        });
        setEditing(false);
    };
    const onRevChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewReview(value);
    };
    const onRatChange = (newrate) => {
        setNewRate(newrate);
    };
    return(
        <div className="review">
        {editing ? (
          <>
          <form onSubmit={onSubmit} className="factoryForm">
        <div className="cinema">
            <div className="cinemaCard">
              <div className="cinema-inf">
                <div className="cinema-inf-top">
                  <div className="cinema-inf-title"><ReactStars
      isHalf={true}
      onChange={onRatChange}
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
          value={newReview}
          onChange={onRevChange}
          row={3}
          required
          placeholder="Edit your review"
          maxLength={1000}
        />
                  </div>
                  <div className="review-submit">
                  <input type="submit" className="submit_button" value="수정" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
          </>
        ) : (
          <>
            <div className="cinema">
            <div className="cinemaCard">
              <div className="cinema-inf">
                <div className="cinema-inf-top">
                  <div className="cinema-inf-title"><FontAwesomeIcon icon={faStar} />{reviewObj.rate} | {reviewObj.nickName} | {moment(reviewObj.createdAt).format("YYYY년 MM월 DD일 HH시mm분ss초")}</div>
                </div>
                <div>
                  <hr className="middle_line" />
                </div>
                <div className="cinema-inf-btm">
                  <div className="cinema-inf-overview">
                    <pre>{reviewObj.text}</pre>
                  </div>
                

            {isOwner && (
              <div class="review__actions">
                <span onClick={onDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
            )}
            </div>
              </div>
            </div>
            </div>
            </>
        )}
      </div>
    
    )
}

export default Review;