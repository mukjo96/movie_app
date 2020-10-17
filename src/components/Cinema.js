import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Cinema({
    theater_id,
    theater_name,
    theater_brand,
    location,
    location_detail,
    vote_average,

}) {
    return (

        <div className="cinema">
            <Link
        to={{
          pathname: `/theaters/${theater_id}`,
          state: {
            theater_id,
    theater_name,
    theater_brand,
    location,
    location_detail,
    vote_average
          },
        }}
      >
         <div className="cinemaCard">
          <div className="brand-poster">
            <div>
              {/* <img
                className="movieimg"
                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                alt={title_original}
                title={title_original}
              /> */}
            </div>
          </div>
          <div className="cinema-inf">
            <div className="cinema-inf-top">
              <div className="cinema-inf-title">{theater_name}</div>
            </div>
            <div>
              <hr />
            </div>
            <div className="cinema-inf-btm">
              <div className="cinema-inf-overview">
                {location}"\n"
                {location_detail}
              </div>
              <div className="cinema-inf-vote-avg">
                <FontAwesomeIcon className="star" icon={faStar} />
                {vote_average}
              </div>
            </div>
          </div>
        </div>
      </Link> 

      </div>
    )
}

export default Cinema;