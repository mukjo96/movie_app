import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "../fBase"
import React, {useState} from "react";
import "./review.css"

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
    const onRatChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewRate(value);
    };
    return(
        <div className="review">
        {editing ? (
          <>
            <form onSubmit={onSubmit} className="container reviewEdit">
              <input
                type="text"
                placeholder="Edit your review"
                value={newReview}
                required
                autoFocus
                onChange={onRevChange}
                className="formInput"
              />
              <input
                type="number"
                placeholder="Edit your rate"
                value={newRate}
                required
                autoFocus
                onChange={onRatChange}
                className="formInput"
              />
              <input type="submit" value="Update Review" className="formBtn" />
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
          </>
        ) : (
          <>
            <h4>{reviewObj.text} {reviewObj.rate}</h4>
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
            </>
        )}
      </div>
    
    )
}

export default Review;